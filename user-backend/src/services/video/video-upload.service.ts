import fs from 'fs'
import { BaseService } from '@/src/lib/base.service.js'
import { NotFoundError } from '@/src/errors/not-found.error.js'
import { AppError } from '@/src/errors/app.error.js'
import { Errors } from '@/src/errors/errorCodes.js'
import prisma from '@/src/lib/prisma.js'
import { convertToHLS, deleteVideoFiles, getVideoMetadata } from '@/src/services/video/ffmpeg.service.js'

type VideoUploadArgs = {
  episodeId: string
  filePath: string
}

export class VideoUploadService extends BaseService {
  static async execute(episodeId: string, filePath: string, context: Record<string, unknown> = {}) {
    return super.execute({ episodeId, filePath }, context)
  }

  async run() {
    const { episodeId, filePath } = this.args as VideoUploadArgs

    const episode = await this.db.episode.findUnique({
      where: { id: episodeId },
      include: { videoAsset: true },
    })

    if (!episode) {
      throw new NotFoundError('Episode not found', { traceId: this.traceId })
    }

    await this.db.videoAsset.upsert({
      where: { episodeId },
      update: {
        status: 'PROCESSING',
        originalPath: filePath,
        processingError: null,
      },
      create: {
        episodeId,
        status: 'PROCESSING',
        originalPath: filePath,
      },
    })

    await this.db.episode.update({
      where: { id: episodeId },
      data: { status: 'PROCESSING' },
    })

    void this.processVideo(episodeId, filePath)

    return { success: true, message: 'Video processing started' }
  }

  private async processVideo(episodeId: string, inputPath: string) {
    try {
      const metadata = await getVideoMetadata(inputPath)
      const hlsResult = await convertToHLS(inputPath, episodeId)

      await prisma.videoAsset.update({
        where: { episodeId },
        data: {
          status: 'READY',
          hlsDirectory: hlsResult.hlsDirectory,
          hlsManifestPath: hlsResult.hlsManifestPath,
          durationSeconds: metadata.durationSeconds,
          fileSizeBytes: BigInt(metadata.fileSizeBytes),
          resolution: metadata.resolution,
          processingError: null,
        },
      })

      await prisma.episode.update({
        where: { id: episodeId },
        data: {
          status: 'READY',
          durationSeconds: metadata.durationSeconds,
        },
      })

      console.log('Video processing complete for episode:', episodeId)
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown video processing error'

      await prisma.videoAsset.update({
        where: { episodeId },
        data: {
          status: 'FAILED',
          processingError: message,
        },
      })

      await prisma.episode.update({
        where: { id: episodeId },
        data: { status: 'FAILED' },
      })

      console.error('Video processing failed:', error)
    }
  }
}

export default VideoUploadService
