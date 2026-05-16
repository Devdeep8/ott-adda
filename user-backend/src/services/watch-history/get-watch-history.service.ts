import { prisma } from '@/src/lib/prisma.js'

export class GetWatchHistoryService {
  static async execute(userId: string, page = 1, limit = 20) {
    const take = limit
    const skip = (page - 1) * take

    const [items, total] = await Promise.all([
      prisma.watchHistory.findMany({
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

export default GetWatchHistoryService
