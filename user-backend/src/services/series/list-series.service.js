import { BaseService } from '@/src/lib/base.service.js'

export class ListSeriesService extends BaseService {
  async run() {
    const { page = 1, limit = 10, status, type, isPremium } = this.args
    const { userId } = this.context

    const where = {}
    if (status) where.status = status
    if (type) where.type = type
    if (isPremium !== undefined) where.isPremium = isPremium === 'true'
    where.deletedAt = null

    const [series, total] = await Promise.all([
      this.db.series.findMany({
        where,
        skip: (Number(page) - 1) * Number(limit),
        take: Number(limit),
        orderBy: { createdAt: 'desc' },
        include: {
          _count: {
            select: { episodes: true }
          }
        }
      }),
      this.db.series.count({ where })
    ])

    // Check if in watch list (if user authenticated)
    let watchListSeries = []
    if (userId) {
      watchListSeries = await this.db.watchListItem.findMany({
        where: { userId },
        select: { seriesId: true }
      })
    }
    const watchListSet = new Set(watchListSeries.map(w => w.seriesId))

    const seriesWithWatchStatus = series.map(s => ({
      ...s,
      isInWatchList: watchListSet.has(s.id)
    }))

    return {
      series: seriesWithWatchStatus,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        totalPages: Math.ceil(total / Number(limit))
      }
    }
  }
}