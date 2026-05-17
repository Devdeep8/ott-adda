import { prisma } from '../../lib/prisma.js'

export class GetContinueWatchingService {
  static async execute(userId) {
    const items = await prisma.watchHistory.findMany({
      where: { userId, isCompleted: false },
      orderBy: { watchedAt: 'desc' },
      take: 10,
      include: {
        episode: {
          select: { id: true, title: true, thumbnailUrl: true, durationSeconds: true, episodeNumber: true, isFree: true },
        },
        series: { select: { id: true, title: true, thumbnailUrl: true, slug: true } },
      },
    })

    const mapped = items.map(i => {
      const percentageWatched = i.durationSeconds > 0 ? Math.round((i.progressSeconds / i.durationSeconds) * 100) : 0
      return { ...i, percentageWatched }
    })

    return mapped
  }
}

export default GetContinueWatchingService