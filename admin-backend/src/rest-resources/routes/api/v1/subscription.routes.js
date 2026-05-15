import { Router } from 'express'
import { SubscriptionController } from '@/src/rest-resources/controllers/subscription.controller.js'
import { adminAuthMiddleware } from '@/src/rest-resources/middlewares/admin-auth.middleware.js'

const router = Router()
const subscriptionController = new SubscriptionController()

// All subscription routes require admin authentication
router.get('/plans', adminAuthMiddleware, subscriptionController.listPlans)
router.get('/plans/:id', adminAuthMiddleware, subscriptionController.getPlanById)
router.post('/plans', adminAuthMiddleware, subscriptionController.createPlan)
router.put('/plans/:id', adminAuthMiddleware, subscriptionController.updatePlan)
router.delete('/plans/:id', adminAuthMiddleware, subscriptionController.deletePlan)
router.get('/', adminAuthMiddleware, subscriptionController.listSubscriptions)
router.get('/:id', adminAuthMiddleware, subscriptionController.getSubscriptionById)
router.put('/:id/status', adminAuthMiddleware, subscriptionController.updateSubscriptionStatus)

export default router
