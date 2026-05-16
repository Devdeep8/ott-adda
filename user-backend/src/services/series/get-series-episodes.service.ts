import { BaseService } from '@/src/lib/base.service.js'

type GetSeriesEpisodesArgs = {
  seriesId: string
  userRole?: string
  hasSubscription?: boolean
}

export class GetSeriesEpisodesService extends BaseService {
  static async execute(
    seriesIdOrArgs: string | GetSeriesEpisodesArgs,
    userRole?: string,
    hasSubscription?: boolean,
    context: Record<string, unknown> = {}
  ) {
    if (typeof seriesIdOrArgs === 'string') {
      return super.execute({ seriesId: seriesIdOrArgs, userRole, hasSubscription }, context)
    }
    return super.execute(seriesIdOrArgs, context)
  }

  async run() {
    const { seriesId, userRole, hasSubscription } = this.args as GetSeriesEpisodesArgs

    const episodes = await this.db.episode.findMany({
      where: { seriesId },
      orderBy: { episodeNumber: 'asc' },
      include: { videoAsset: true },
    })

    if (userRole === 'ADMIN' || hasSubscription) {
      return episodes
    }

    return episodes.map(({ videoAsset, ...episode }) => {
      if (episode.isFree) {
        return {
          ...episode,
          videoAsset,
          isPremiumLocked: false,
        }
      }

      return {
        ...episode,
        isPremiumLocked: true,
      }
    })
  }
}
