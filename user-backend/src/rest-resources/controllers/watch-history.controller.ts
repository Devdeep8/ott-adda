import type { NextFunction, Request, Response } from 'express'
import { SaveProgressService } from '@/src/services/watch-history/save-progress.service.js'
import { GetContinueWatchingService } from '@/src/services/watch-history/get-continue-watching.service.js'
import { GetWatchHistoryService } from '@/src/services/watch-history/get-watch-history.service.js'
import { DeleteFromHistoryService } from '@/src/services/watch-history/delete-from-history.service.js'

class WatchHistoryController {
  static async saveProgress(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = (req as any).context?.user?.id ?? (req as any).context?.userId
      if (!userId) return res.status(401).json({ success: false, message: 'Unauthenticated' })

      const { episodeId, seriesId, progressSeconds, durationSeconds } = req.body
      await SaveProgressService.execute(userId, { episodeId, seriesId, progressSeconds: Number(progressSeconds), durationSeconds: Number(durationSeconds) })
      return res.json({ success: true })
    } catch (error) {
      return next(error)
    }
  }

  static async getContinueWatching(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = (req as any).context?.user?.id ?? (req as any).context?.userId
      if (!userId) return res.status(401).json({ success: false, message: 'Unauthenticated' })

      const data = await GetContinueWatchingService.execute(userId)
      return res.json({ success: true, items: data })
    } catch (error) {
      return next(error)
    }
  }

  static async getHistory(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = (req as any).context?.user?.id ?? (req as any).context?.userId
      if (!userId) return res.status(401).json({ success: false, message: 'Unauthenticated' })

      const page = Number(req.query.page) || 1
      const limit = Number(req.query.limit) || 20
      const data = await GetWatchHistoryService.execute(userId, page, limit)
      return res.json({ success: true, ...data })
    } catch (error) {
      return next(error)
    }
  }

  static async deleteFromHistory(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = (req as any).context?.user?.id ?? (req as any).context?.userId
      if (!userId) return res.status(401).json({ success: false, message: 'Unauthenticated' })

      const episodeId = req.params.episodeId
      await DeleteFromHistoryService.execute(userId, episodeId)
      return res.json({ success: true })
    } catch (error) {
      return next(error)
    }
  }
}

export default WatchHistoryController
