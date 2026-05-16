import fs from 'fs'
import path from 'path'
import { BaseService } from '@/src/lib/base.service.js'
import { NotFoundError } from '@/src/errors/not-found.error.js'

type DeleteEpisodeArgs = {
  id: string
}

const resolveDiskPath = (inputPath: string) =>
  path.isAbsolute(inputPath) ? inputPath : path.resolve(process.cwd(), inputPath)

export class DeleteEpisodeService extends BaseService {
  static async execute(id: string, context: Record<string, unknown> = {}) {
    return super.execute({ id }, context)
  }

  async run() {
    const { id } = this.args as DeleteEpisodeArgs

    const episode = await this.db.episode.findUnique({
      where: { id },
      include: { videoAsset: true },
    })

    if (!episode) {
      throw new NotFoundError('Episode not found', { traceId: this.traceId })
    }

    const hlsDirByEpisode = path.resolve(process.cwd(), 'uploads', 'hls', episode.id)
    if (fs.existsSync(hlsDirByEpisode)) {
      fs.rmSync(hlsDirByEpisode, { recursive: true, force: true })
    }

    if (episode.videoAsset?.hlsDirectory) {
      const hlsDirectory = resolveDiskPath(episode.videoAsset.hlsDirectory)
      if (fs.existsSync(hlsDirectory)) {
        fs.rmSync(hlsDirectory, { recursive: true, force: true })
      }
    }

    if (episode.videoAsset?.originalPath) {
      const originalVideoPath = resolveDiskPath(episode.videoAsset.originalPath)
      if (fs.existsSync(originalVideoPath)) {
        fs.rmSync(originalVideoPath, { force: true })
      }
    }

    await this.db.$transaction(async (tx) => {
      if (episode.videoAsset) {
        await tx.videoAsset.delete({ where: { episodeId: episode.id } })
      }

      await tx.series.update({
        where: { id: episode.seriesId },
        data: { totalEpisodes: { decrement: 1 } },
      })

      await tx.episode.delete({ where: { id: episode.id } })
    })

    return { success: true }
  }
}

export default DeleteEpisodeService
