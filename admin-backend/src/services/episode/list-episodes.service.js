import { BaseService } from '@/src/lib/base.service.js'

export class ListEpisodesService extends BaseService {
  async run() {
    const { page = 1, limit = 10, seriesId, status, season } = this.args

    const where = { deletedAt: null }
    if (seriesId) where.seriesId = Number(seriesId)
    if (status) where.status = status
    if (season) where.season = Number(season)

    const [episodes, total] = await Promise.all([
      this.db.episode.findMany({
        where,
        skip: (page - 1) * limit,
        take: Number(limit),
        orderBy: [
          { season: 'asc' },
          { episodeNumber: 'asc' }
        ],
        include: {
          series: {
            select: {
              id: true,
              title: true,
              slug: true
            }
          }
        }
      }),
      this.db.episode.count({ where })
    ])

    return {
      episodes,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        totalPages: Math.ceil(total / limit)
      }
    }
  }
}