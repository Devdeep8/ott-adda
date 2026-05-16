import { BaseService } from '@/src/lib/base.service.js'
import { AppError } from '@/src/errors/app.error.js'
import { Errors } from '@/src/errors/errorCodes.js'
import { NotFoundError } from '@/src/errors/not-found.error.js'
import type { CreateEpisodeInput } from '@/src/types/episode.types.js'

export class CreateEpisodeService extends BaseService {
  static async execute(data: CreateEpisodeInput, context: Record<string, unknown> = {}) {
    return super.execute(data, context)
  }

  async run() {
    const data = this.args as CreateEpisodeInput

    const series = await this.db.series.findUnique({ where: { id: data.seriesId } })
    if (!series) {
      throw new NotFoundError('Series not found', { traceId: this.traceId })
    }

    const existingNumber = await this.db.episode.findFirst({
      where: { seriesId: data.seriesId, episodeNumber: Number(data.episodeNumber) },
      select: { id: true },
    })

    if (existingNumber) {
      throw new AppError(Errors.EPISODE_NUMBER_EXISTS, { traceId: this.traceId })
    }

    const created = await this.db.$transaction(async (tx) => {
      const episode = await tx.episode.create({
        data: {
          seriesId: data.seriesId,
          title: data.title,
          episodeNumber: Number(data.episodeNumber),
          description: data.description,
          isFree: data.isFree ?? false,
          thumbnailUrl: data.thumbnailUrl,
          status: 'PROCESSING',
        },
      })

      await tx.series.update({
        where: { id: data.seriesId },
        data: { totalEpisodes: { increment: 1 } },
      })

      return episode
    })

    return created
  }
}

export default CreateEpisodeService
