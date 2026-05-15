import { BaseService } from '@/src/lib/base.service.js'
import { AppError } from '@/src/errors/app.error.js'
import { Errors } from '@/src/errors/errorCodes.js'

export class GetSeriesEpisodesService extends BaseService {
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
    const { slug, season } = this.args

    const series = await this.db.series.findUnique({
      where: { slug, deletedAt: null },
      select: { id: true, title: true, slug: true }
    })

    if (!series) {
      throw new AppError(Errors.SERIES_NOT_FOUND, { traceId: this.traceId })
    }

    const where = { seriesId: series.id, deletedAt: null }
    if (season) where.season = Number(season)

    const episodes = await this.db.episode.findMany({
      where,
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
        videoType: true,
        status: true,
        releaseDate: true,
        createdAt: true
      }
    })

    return {
      series: {
        id: series.id,
        title: series.title,
        slug: series.slug
      },
      episodes
    }
  }
}