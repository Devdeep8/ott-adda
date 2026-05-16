import { sendResponse } from '@/src/helpers/response.helpers.js'

export class AdminUserController {
  async list(req, res, next) {
    try {
      return sendResponse(req, res, [], 'Users list fetched')
    } catch (error) {
      return this.handleError(error, res)
    }
  }

  async getById(req, res, next) {
    try {
      return sendResponse(req, res, {}, 'User fetched')
    } catch (error) {
      return this.handleError(error, res)
    }
  }

  async updateStatus(req, res, next) {
    try {
      return sendResponse(req, res, {}, 'User status updated')
    } catch (error) {
      return this.handleError(error, res)
    }
  }

  async getUserSubscription(req, res, next) {
    try {
      return sendResponse(req, res, {}, 'User subscription fetched')
    } catch (error) {
      return this.handleError(error, res)
    }
  }
}
