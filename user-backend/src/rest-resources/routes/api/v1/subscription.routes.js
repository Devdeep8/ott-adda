import express from 'express'
import {SubscriptionController} from '../../../../rest-resources/controllers/subscription.controller.js'
import { authMiddleware } from '../../../../rest-resources/middlewares/auth.middleware.js'
const router = express.Router()

router.get('/plans', SubscriptionController.listPlans)
// router.get('/payment-history', authMiddleware(), SubscriptionController.g)
router.get('/my', authMiddleware(), SubscriptionController.getMySubscription)
router.post('/payment/create-order', authMiddleware(), SubscriptionController.subscribe)
// router.post('/payment/verify', authMiddleware(), SubscriptionController.verifyPayment)
// router.post('/payment/mock', authMiddleware(), SubscriptionController.mockPayment)

export default router