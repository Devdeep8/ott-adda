import { BaseService } from '@/src/lib/base.service.js'

export class ListSeriesService extends BaseService {
  async run() {
    const { page = 1, limit = 10, status, type } = this.args

    const where = {}
    if (status) where.status = status
    if (type) where.type = type

    const [series, total] = await Promise.all([
      this.db.series.findMany({
        where,
        skip: (page - 1) * limit,
        take: Number(limit),
        orderBy: { createdAt: 'desc' },
        include: { episodes: true }
      }),
      this.db.series.count({ where })
    ])

    return {
      series,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        totalPages: Math.ceil(total / limit)
      }
    }
  }
}
