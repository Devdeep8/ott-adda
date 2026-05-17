import { sendResponse } from '@/src/helpers/response.helpers.js'
import GetWatchHistoryService from '@/src/services/watch-history/get-watch-history.service'
export class WatchHistoryController  {
static  async list(req, res, next) {
    try {
      const result = await GetWatchHistoryService.execute(req.query, req.context)
      return sendResponse({req, res}, result, 'Watch history fetched')
    } catch (error) {
      return next(error)
    }
  }

static  async record(req, res, next) {
    try {
      const { RecordWatchHistoryService } = await import('@/src/services/watch-history/record-watch-history.service.js')
      const result = await RecordWatchHistoryService.execute(req.body, req.context)
      return sendResponse({req, res}, result, 'Watch history recorded')
    } catch (error) {
      return next(error)
    }
  }

static  async update(req, res, next) {
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