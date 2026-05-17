import { sendResponse } from '../../helpers/response.helpers.js'

export class SubscriptionController {
static  async listPlans(req, res, next) {
    try {
      const { ListPlansService } = await import('@/src/services/subscription/list-plans.service.js')
      const result = await ListPlansService.execute({}, req.context)
      return sendResponse(req, res, result, 'Plans fetched')
    } catch (error) {
      return next(error)
    }
  }

 static async getPlanById(req, res, next) {
    try {
      const { GetPlanService } = await import('@/src/services/subscription/get-plan.service.js')
      const result = await GetPlanService.execute({ id: parseInt(req.params.id) }, req.context)
      return sendResponse(req, res, result, 'Plan fetched')
    } catch (error) {
      return next(error)
    }
  }

static  async getMySubscription(req, res, next) {
    try {
      const { GetMySubscriptionService } = await import('@/src/services/subscription/get-my-subscription.service.js')
      const result = await GetMySubscriptionService.execute({}, req.context)
      return sendResponse(req, res, result, 'Subscription fetched')
    } catch (error) {
      return next(error)
    }
  }

 static async subscribe(req, res, next) {
    try {
      const { SubscribeService } = await import('@/src/services/subscription/subscribe.service.js')
      const result = await SubscribeService.execute(req.body, req.context)
      return sendResponse(req, res, result, 'Subscription successful')
    } catch (error) {
      return next(error)
    }
  }

 static async cancelSubscription(req, res, next) {
    try {
      const { CancelSubscriptionService } = await import('@/src/services/subscription/cancel-subscription.service.js')
      const result = await CancelSubscriptionService.execute({}, req.context)
      return sendResponse(req, res, result, 'Subscription cancelled')
    } catch (error) {
      return next(error)
    }
  }
}