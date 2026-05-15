import { BaseController } from '@/src/lib/base.controller.js'
import { sendResponse } from '@/src/helpers/response.helpers.js'

export class CategoryController extends BaseController {
  async list(req, res, next) {
    try {
      return sendResponse(req, res, [], 'Categories list fetched')
    } catch (error) {
      return this.handleError(error, res)
    }
  }

  async getById(req, res, next) {
    try {
      return sendResponse(req, res, {}, 'Category fetched')
    } catch (error) {
      return this.handleError(error, res)
    }
  }

  async create(req, res, next) {
    try {
      return sendResponse(req, res, {}, 'Category created')
    } catch (error) {
      return this.handleError(error, res)
    }
  }

  async update(req, res, next) {
    try {
      return sendResponse(req, res, {}, 'Category updated')
    } catch (error) {
      return this.handleError(error, res)
    }
  }

  async delete(req, res, next) {
    try {
      return sendResponse(req, res, {}, 'Category deleted')
    } catch (error) {
      return this.handleError(error, res)
    }
  }

  async updateOrder(req, res, next) {
    try {
      return sendResponse(req, res, {}, 'Category order updated')
    } catch (error) {
      return this.handleError(error, res)
    }
  }

  async updateSeriesOrder(req, res, next) {
    try {
      return sendResponse(req, res, {}, 'Series order updated in category')
    } catch (error) {
      return this.handleError(error, res)
    }
  }
}
