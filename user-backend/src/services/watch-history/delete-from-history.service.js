import { prisma } from '../../lib/prisma.js'

export class DeleteFromHistoryService {
  static async execute(userId, episodeId) {
    await prisma.watchHistory.delete({ where: { userId_episodeId: { userId, episodeId } } })
    return { success: true }
  }
}

export default DeleteFromHistoryService