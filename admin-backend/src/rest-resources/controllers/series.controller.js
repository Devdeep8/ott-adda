import { BaseController } from '@/src/lib/base.controller.js'
import { sendResponse } from '@/src/helpers/response.helpers.js'
import { ListSeriesService } from '@/src/services/series/list-series.service.js'
import { CreateSeriesService } from '@/src/services/series/create-series.service.js'
import { GetSeriesService } from '@/src/services/series/get-series.service.js'
import { UpdateSeriesService } from '@/src/services/series/update-series.service.js'
import { DeleteSeriesService } from '@/src/services/series/delete-series.service.js'
import { UpdateSeriesStatusService } from '@/src/services/series/update-series-status.service.js'
import { ManageSeriesCategoriesService } from '@/src/services/series/manage-series-categories.service.js'

export class SeriesController extends BaseController {
  async list(req, res) {
    try {
      const service = new ListSeriesService(req.query, req.context)
      const result = await service.run()
      return sendResponse(req, res, result, 'Series list fetched')
    } catch (error) {
      return this.handleError(error, res)
    }
  }

  async getById(req, res) {
    try {
      const service = new GetSeriesService({ id: req.params.id }, req.context)
      const result = await service.run()
      return sendResponse(req, res, result, 'Series fetched')
    } catch (error) {
      return this.handleError(error, res)
    }
  }

  async create(req, res) {
    try {
      const service = new CreateSeriesService(req.body, req.context)
      const result = await service.run()
      return sendResponse(req, res, result, 'Series created')
    } catch (error) {
      return this.handleError(error, res)
    }
  }

  async update(req, res) {
    try {
      const service = new UpdateSeriesService({ id: req.params.id, ...req.body }, req.context)
      const result = await service.run()
      return sendResponse(req, res, result, 'Series updated')
    } catch (error) {
      return this.handleError(error, res)
    }
  }

  async delete(req, res) {
    try {
      const service = new DeleteSeriesService({ id: req.params.id, hardDelete: req.query.hardDelete === 'true' }, req.context)
      const result = await service.run()
      return sendResponse(req, res, result, 'Series deleted')
    } catch (error) {
      return this.handleError(error, res)
    }
  }

  async updateStatus(req, res) {
    try {
      const service = new UpdateSeriesStatusService({ id: req.params.id, status: req.body.status }, req.context)
      const result = await service.run()
      return sendResponse(req, res, result, 'Series status updated')
    } catch (error) {
      return this.handleError(error, res)
    }
  }

  async manageCategories(req, res) {
    try {
      const service = new ManageSeriesCategoriesService(
        { seriesId: req.params.id, ...req.body },
        req.context
      )
      const result = await service.run()
      return sendResponse(req, res, result, 'Series categories updated')
    } catch (error) {
      return this.handleError(error, res)
    }
  }
}
