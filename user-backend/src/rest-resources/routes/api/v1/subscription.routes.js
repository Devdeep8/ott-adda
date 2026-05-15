import { Router } from 'express'
import { contextMiddleware } from '@/src/rest-resources/middlewares/context.middleware.js'
import { authMiddleware } from '@/src/rest-resources/middlewares/auth.middleware.js'
import { SubscriptionController } from '@/src/rest-resources/controllers/subscription.controller.js'

const router = Router()
const subscriptionController = new SubscriptionController()

// Public routes (get plans)
router.get('/plans', subscriptionController.listPlans)
router.get('/plans/:id', subscriptionController.getPlanById)

// Protected routes (require auth)
router.use(contextMiddleware(), authMiddleware())
router.get('/my', subscriptionController.getMySubscription)
router.post('/subscribe', subscriptionController.subscribe)
router.post('/cancel', subscriptionController.cancelSubscription)

export default router