import { prisma } from '@/src/lib/prisma.js'

export class SaveProgressService {
  static async execute(userId: string, { episodeId, seriesId, progressSeconds, durationSeconds }: { episodeId: string; seriesId: string; progressSeconds: number; durationSeconds: number }) {
    const isCompleted = durationSeconds > 0 ? progressSeconds / durationSeconds >= 0.9 : false

    // fetch existing to determine if we should increment views
    const existing = await prisma.watchHistory.findUnique({ where: { userId_episodeId: { userId, episodeId } } })

    const now = new Date()

    await prisma.watchHistory.upsert({
      where: { userId_episodeId: { userId, episodeId } },
      update: {
        progressSeconds,
        durationSeconds,
        isCompleted,
        watchedAt: now,
      },
      create: {
        userId,
        episodeId,
        seriesId,
        progressSeconds,
        durationSeconds,
        isCompleted,
        watchedAt: now,
      },
    })

    // If newly completed, increment counters asynchronously
    const wasCompleted = existing?.isCompleted ?? false
    if (!wasCompleted && isCompleted) {
      // increment episode and series view counts without awaiting
      prisma.episode.update({ where: { id: episodeId }, data: { viewCount: { increment: 1 } } }).catch(err => console.error('inc episode view error', err))
      prisma.series.update({ where: { id: seriesId }, data: { viewCount: { increment: 1 } } }).catch(err => console.error('inc series view error', err))
    }

    return { success: true }
  }
}

export default SaveProgressService
