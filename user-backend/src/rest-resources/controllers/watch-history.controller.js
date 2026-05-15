import { sendResponse } from '@/src/helpers/response.helpers.js'

export class WatchHistoryController  {
  async list(req, res, next) {
    try {
      const { ListWatchHistoryService } = await import('@/src/services/watch-history/list-watch-history.service.js')
      const result = await ListWatchHistoryService.execute(req.query, req.context)
      return sendResponse(req, res, result, 'Watch history fetched')
    } catch (error) {
      return next(error)
    }
  }

  async record(req, res, next) {
    try {
      const { RecordWatchHistoryService } = await import('@/src/services/watch-history/record-watch-history.service.js')
      const result = await RecordWatchHistoryService.execute(req.body, req.context)
      return sendResponse(req, res, result, 'Watch history recorded')
    } catch (error) {
      return next(error)
    }
  }

  async update(req, res, next) {
    try {
      const { UpdateWatchHistoryService } = await import('@/src/services/watch-history/update-watch-history.service.js')
      const result = await UpdateWatchHistoryService.execute(
        { id: parseInt(req.params.historyId), ...req.body },
        req.context
      )
      return sendResponse(req, res, result, 'Watch history updated')
    } catch (error) {
      return next(error)
    }
  }
}