import { BaseService } from '@/src/lib/base.service.js'

type GetAllSeriesArgs = {
  status?: 'DRAFT' | 'ACTIVE' | 'UPCOMING' | 'ARCHIVED'
  genre?: string
  page?: number | string
  limit?: number | string
}

export class GetAllSeriesService extends BaseService {
  static async execute(args: GetAllSeriesArgs = {}, context: Record<string, unknown> = {}) {
    return super.execute(args, context)
  }

  async run() {
    const { status, genre, page = 1, limit = 20 } = this.args as GetAllSeriesArgs

    const pageNumber = Math.max(1, Number(page) || 1)
    const limitNumber = Math.max(1, Number(limit) || 20)

    const where: {
      status?: 'DRAFT' | 'ACTIVE' | 'UPCOMING' | 'ARCHIVED'
      genres?: { has: string }
    } = {}

    if (status) where.status = status
    if (genre) where.genres = { has: genre }

    const [series, total] = await Promise.all([
      this.db.series.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip: (pageNumber - 1) * limitNumber,
        take: limitNumber,
        select: {
          id: true,
          title: true,
          slug: true,
          genres: true,
          thumbnailUrl: true,
          bannerUrl: true,
          status: true,
          releaseDate: true,
          viewCount: true,
          isFeatured: true,
          totalEpisodes: true,
        },
      }),
      this.db.series.count({ where }),
    ])

    return {
      data: series,
      pagination: {
        page: pageNumber,
        limit: limitNumber,
        total,
        pages: Math.ceil(total / limitNumber),
      },
    }
  }
}
