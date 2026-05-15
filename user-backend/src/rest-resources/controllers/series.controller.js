import { sendResponse } from '@/src/helpers/response.helpers.js'

export class SeriesController  {
  async list(req, res, next) {
    try {
      const { ListSeriesService } = await import('@/src/services/series/list-series.service.js')
      const result = await ListSeriesService.execute(req.query, req.context)
      return sendResponse(req, res, result, 'Series list fetched')
    } catch (error) {
      return next(error)
    }
  }

  async getBySlug(req, res, next) {
    try {
      const { GetSeriesService } = await import('@/src/services/series/get-series.service.js')
      const result = await GetSeriesService.execute({ slug: req.params.slug }, req.context)
      return sendResponse(req, res, result, 'Series fetched')
    } catch (error) {
      return next(error)
    }
  }

  async getEpisodes(req, res, next) {
    try {
      const { GetSeriesEpisodesService } = await import('@/src/services/series/get-series-episodes.service.js')
      const result = await GetSeriesEpisodesService.execute({ slug: req.params.slug }, req.context)
      return sendResponse(req, res, result, 'Episodes fetched')
    } catch (error) {
      return next(error)
    }
  }
}