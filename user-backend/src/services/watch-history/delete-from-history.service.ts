import { prisma } from '@/src/lib/prisma.js'

export class DeleteFromHistoryService {
  static async execute(userId: string, episodeId: string) {
    await prisma.watchHistory.delete({ where: { userId_episodeId: { userId, episodeId } } })
    return { success: true }
  }
}

export default DeleteFromHistoryService
