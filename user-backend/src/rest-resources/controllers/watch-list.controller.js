import { sendResponse } from '../../helpers/response.helpers.js'

export class WatchListController  {
  async list(req, res, next) {
    try {
      const { ListWatchListService } = await import('@/src/services/watch-list/list-watch-list.service.js')
      const result = await ListWatchListService.execute(req.query, req.context)
      return sendResponse(req, res, result, 'Watch list fetched')
    } catch (error) {
      return next(error)
    }
  }

  async add(req, res, next) {
    try {
      const { AddToWatchListService } = await import('@/src/services/watch-list/add-to-watch-list.service.js')
      const result = await AddToWatchListService.execute(req.body, req.context)
      return sendResponse(req, res, result, 'Added to watch list')
    } catch (error) {
      return next(error)
    }
  }

  async remove(req, res, next) {
    try {
      const { RemoveFromWatchListService } = await import('@/src/services/watch-list/remove-from-watch-list.service.js')
      const result = await RemoveFromWatchListService.execute(
        { seriesId: parseInt(req.params.seriesId) },
        req.context
      )
      return sendResponse(req, res, result, 'Removed from watch list')
    } catch (error) {
      return next(error)
    }
  }

  async check(req, res, next) {
    try {
      const { CheckWatchListService } = await import('@/src/services/watch-list/check-watch-list.service.js')
      const result = await CheckWatchListService.execute(
        { seriesId: parseInt(req.params.seriesId) },
        req.context
      )
      return sendResponse(req, res, result, 'Watch list status checked')
    } catch (error) {
      return next(error)
    }
  }
}