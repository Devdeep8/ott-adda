import BaseService from '@/src/lib/base.service.js'
import  prisma  from '@/src/lib/prisma'

export default class GetWatchHistoryService extends BaseService {
   async run(userId, page = 1, limit = 20) {
    const take = limit
    const skip = (page - 1) * take

    const [items, total] = await Promise.all([
      this.db.watchHistory.findMany({
        where: { userId },
        orderBy: { watchedAt: 'desc' },
        skip,
        take,
        include: {
          episode: { select: { id: true, title: true, thumbnailUrl: true, durationSeconds: true, episodeNumber: true, isFree: true } },
          series: { select: { id: true, title: true, thumbnailUrl: true, slug: true } },
        },
      }),
      prisma.watchHistory.count({ where: { userId } }),
    ])

    return { items, page, limit, total }
  }
}

