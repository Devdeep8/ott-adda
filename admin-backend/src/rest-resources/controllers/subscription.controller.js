import { BaseController } from '@/src/lib/base.controller.js'
import { sendResponse } from '@/src/helpers/response.helpers.js'
import { ListPlansService } from '@/src/services/subscription/list-plans.service.js'
import { CreatePlanService } from '@/src/services/subscription/create-plan.service.js'
import { GetPlanService } from '@/src/services/subscription/get-plan.service.js'
import { UpdatePlanService } from '@/src/services/subscription/update-plan.service.js'
import { DeletePlanService } from '@/src/services/subscription/delete-plan.service.js'
import { ListSubscriptionsService } from '@/src/services/subscription/list-subscriptions.service.js'
import { GetSubscriptionService } from '@/src/services/subscription/get-subscription.service.js'
import { UpdateSubscriptionStatusService } from '@/src/services/subscription/update-subscription-status.service.js'

export class SubscriptionController extends BaseController {
  async listPlans(req, res) {
    try {
      const service = new ListPlansService(req.query, req.context)
      const result = await service.run()
      return sendResponse(req, res, result, 'Subscription plans fetched')
    } catch (error) {
      return this.handleError(error, res)
    }
  }

  async getPlanById(req, res) {
    try {
      const service = new GetPlanService({ id: req.params.id }, req.context)
      const result = await service.run()
      return sendResponse(req, res, result, 'Plan fetched')
    } catch (error) {
      return this.handleError(error, res)
    }
  }

  async createPlan(req, res) {
    try {
      const service = new CreatePlanService(req.body, req.context)
      const result = await service.run()
      return sendResponse(req, res, result, 'Plan created')
    } catch (error) {
      return this.handleError(error, res)
    }
  }

  async updatePlan(req, res) {
    try {
      const service = new UpdatePlanService({ id: req.params.id, ...req.body }, req.context)
      const result = await service.run()
      return sendResponse(req, res, result, 'Plan updated')
    } catch (error) {
      return this.handleError(error, res)
    }
  }

  async deletePlan(req, res) {
    try {
      const service = new DeletePlanService({ id: req.params.id }, req.context)
      const result = await service.run()
      return sendResponse(req, res, result, 'Plan deleted')
    } catch (error) {
      return this.handleError(error, res)
    }
  }

  async listSubscriptions(req, res) {
    try {
      const service = new ListSubscriptionsService(req.query, req.context)
      const result = await service.run()
      return sendResponse(req, res, result, 'Subscriptions fetched')
    } catch (error) {
      return this.handleError(error, res)
    }
  }

  async getSubscriptionById(req, res) {
    try {
      const service = new GetSubscriptionService({ id: req.params.id }, req.context)
      const result = await service.run()
      return sendResponse(req, res, result, 'Subscription fetched')
    } catch (error) {
      return this.handleError(error, res)
    }
  }

  async updateSubscriptionStatus(req, res) {
    try {
      const service = new UpdateSubscriptionStatusService({ id: req.params.id, ...req.body }, req.context)
      const result = await service.run()
      return sendResponse(req, res, result, 'Subscription status updated')
    } catch (error) {
      return this.handleError(error, res)
    }
  }
}
