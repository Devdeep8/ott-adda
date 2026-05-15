import { BaseController } from '@/src/lib/base.controller.js'
import { sendResponse } from '@/src/helpers/response.helpers.js'

export class EpisodeController extends BaseController {
  async list(req, res, next) {
    try {
      return sendResponse(req, res, [], 'Episodes list fetched')
    } catch (error) {
      return this.handleError(error, res)
    }
  }

  async getById(req, res, next) {
    try {
      return sendResponse(req, res, {}, 'Episode fetched')
    } catch (error) {
      return this.handleError(error, res)
    }
  }

  async create(req, res, next) {
    try {
      return sendResponse(req, res, {}, 'Episode created')
    } catch (error) {
      return this.handleError(error, res)
    }
  }

  async update(req, res, next) {
    try {
      return sendResponse(req, res, {}, 'Episode updated')
    } catch (error) {
      return this.handleError(error, res)
    }
  }

  async delete(req, res, next) {
    try {
      return sendResponse(req, res, {}, 'Episode deleted')
    } catch (error) {
      return this.handleError(error, res)
    }
  }
}
