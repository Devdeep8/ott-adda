import { BaseService } from '@/src/lib/base.service.js'
import { AppError } from '@/src/errors/app.error.js'
import { Errors } from '@/src/errors/errorCodes.js'
import { NotFoundError } from '@/src/errors/not-found.error.js'
import type { UpdateEpisodeInput } from '@/src/types/episode.types.js'

type UpdateEpisodeArgs = {
  id: string
  data: UpdateEpisodeInput
}

export class UpdateEpisodeService extends BaseService {
  static async execute(id: string, data: UpdateEpisodeInput, context: Record<string, unknown> = {}) {
    return super.execute({ id, data }, context)
  }

  async run() {
    const { id, data } = this.args as UpdateEpisodeArgs

    const existing = await this.db.episode.findUnique({ where: { id } })
    if (!existing) {
      throw new NotFoundError('Episode not found', { traceId: this.traceId })
    }

    if (data.episodeNumber !== undefined && Number(data.episodeNumber) !== existing.episodeNumber) {
      const conflict = await this.db.episode.findFirst({
        where: {
          seriesId: existing.seriesId,
          episodeNumber: Number(data.episodeNumber),
        },
        select: { id: true },
      })

      if (conflict) {
        throw new AppError(Errors.EPISODE_NUMBER_EXISTS, { traceId: this.traceId })
      }
    }

    const updated = await this.db.episode.update({
      where: { id },
      data: {
        ...(data.title !== undefined ? { title: data.title } : {}),
        ...(data.description !== undefined ? { description: data.description } : {}),
        ...(data.episodeNumber !== undefined ? { episodeNumber: Number(data.episodeNumber) } : {}),
        ...(data.isFree !== undefined ? { isFree: data.isFree } : {}),
        ...(data.thumbnailUrl !== undefined ? { thumbnailUrl: data.thumbnailUrl } : {}),
        ...(data.status !== undefined ? { status: data.status } : {}),
      },
    })

    return updated
  }
}

export default UpdateEpisodeService
