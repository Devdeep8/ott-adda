import { BaseService } from '@/src/lib/base.service.js'
import { AppError } from '@/src/errors/app.error.js'
import { Errors } from '@/src/errors/errorCodes.js'

export class GetSeriesService extends BaseService {
  validate() {
    const { slug } = this.args
    if (!slug) {
      throw new AppError(Errors.VALIDATION_ERROR, {
        traceId: this.traceId,
        details: [{ field: 'slug', message: 'Series slug is required' }]
      })
    }
  }

  async run() {
    const { slug } = this.args
    const { userId } = this.context

    const series = await this.db.series.findUnique({
      where: { slug, deletedAt: null },
      include: {
        episodes: {
          where: { deletedAt: null },
          orderBy: [{ season: 'asc' }, { episodeNumber: 'asc' }],
          select: {
            id: true,
            season: true,
            episodeNumber: true,
            title: true,
            description: true,
            duration: true,
            thumbnailUrl: true,
            videoUrl: true,
            status: true,
            releaseDate: true
          }
        },
        _count: {
          select: { episodes: true }
        }
      }
    })

    if (!series) {
      throw new AppError(Errors.SERIES_NOT_FOUND, { traceId: this.traceId })
    }

    // Check if in watch list
    let isInWatchList = false
    if (userId) {
      const watchListItem = await this.db.watchListItem.findUnique({
        where: { userId_seriesId: { userId, seriesId: series.id } }
      })
      isInWatchList = !!watchListItem
    }

    return {
      series: {
        ...series,
        isInWatchList,
        totalEpisodes: series._count.episodes
      }
    }
  }
}