import { BaseController } from '@/src/lib/base.controller.js'
import { sendResponse } from '@/src/helpers/response.helpers.js'

export class SubscriptionController extends BaseController {
  async listPlans(req, res, next) {
    try {
      return sendResponse(req, res, [], 'Subscription plans fetched')
    } catch (error) {
      return this.handleError(error, res)
    }
  }

  async getPlanById(req, res, next) {
    try {
      return sendResponse(req, res, {}, 'Plan fetched')
    } catch (error) {
      return this.handleError(error, res)
    }
  }

  async createPlan(req, res, next) {
    try {
      return sendResponse(req, res, {}, 'Plan created')
    } catch (error) {
      return this.handleError(error, res)
    }
  }

  async updatePlan(req, res, next) {
    try {
      return sendResponse(req, res, {}, 'Plan updated')
    } catch (error) {
      return this.handleError(error, res)
    }
  }

  async deletePlan(req, res, next) {
    try {
      return sendResponse(req, res, {}, 'Plan deleted')
    } catch (error) {
      return this.handleError(error, res)
    }
  }

  async listSubscriptions(req, res, next) {
    try {
      return sendResponse(req, res, [], 'Subscriptions fetched')
    } catch (error) {
      return this.handleError(error, res)
    }
  }

  async getSubscriptionById(req, res, next) {
    try {
      return sendResponse(req, res, {}, 'Subscription fetched')
    } catch (error) {
      return this.handleError(error, res)
    }
  }

  async updateSubscriptionStatus(req, res, next) {
    try {
      return sendResponse(req, res, {}, 'Subscription status updated')
    } catch (error) {
      return this.handleError(error, res)
    }
  }
}
