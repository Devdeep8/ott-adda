import fs from 'fs'
import { BaseService } from '../../lib/base.service.js'
import { NotFoundError } from '../../errors/not-found.error.js'
import { AppError } from '../../errors/app.error.js'
import { Errors } from '../../errors/errorCodes.js'
import prisma from '../../lib/prisma.js'
import { convertToHLS, deleteVideoFiles, getVideoMetadata } from '../../services/video/ffmpeg.service.js'

export class VideoUploadService extends BaseService {
  static async execute(episodeId, filePath, context = {}) {
    return super.execute({ episodeId, filePath }, context)
  }

  async run() {
    const { episodeId, filePath } = this.args

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

  async processVideo(episodeId, inputPath) {
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