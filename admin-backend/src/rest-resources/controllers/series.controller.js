import { BaseController } from '@/src/lib/base.controller.js'
import { sendResponse } from '@/src/helpers/response.helpers.js'

export class SeriesController extends BaseController {
  async list(req, res, next) {
    try {
      // TODO: Implement ListSeriesService
      return sendResponse(req, res, [], 'Series list fetched')
    } catch (error) {
      return this.handleError(error, res)
    }
  }

  async getById(req, res, next) {
    try {
      // TODO: Implement GetSeriesService
      return sendResponse(req, res, {}, 'Series fetched')
    } catch (error) {
      return this.handleError(error, res)
    }
  }

  async create(req, res, next) {
    try {
      // TODO: Implement CreateSeriesService
      return sendResponse(req, res, {}, 'Series created')
    } catch (error) {
      return this.handleError(error, res)
    }
  }

  async update(req, res, next) {
    try {
      // TODO: Implement UpdateSeriesService
      return sendResponse(req, res, {}, 'Series updated')
    } catch (error) {
      return this.handleError(error, res)
    }
  }

  async delete(req, res, next) {
    try {
      // TODO: Implement DeleteSeriesService
      return sendResponse(req, res, {}, 'Series deleted')
    } catch (error) {
      return this.handleError(error, res)
    }
  }

  async updateStatus(req, res, next) {
    try {
      // TODO: Implement UpdateSeriesStatusService
      return sendResponse(req, res, {}, 'Series status updated')
    } catch (error) {
      return this.handleError(error, res)
    }
  }
}
