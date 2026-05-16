import express from 'express'
import SubscriptionController from '@/src/rest-resources/controllers/subscription.controller.js'
import { authMiddleware } from '@/src/rest-resources/middlewares/auth.middleware.js'

const router = express.Router()

router.get('/plans', SubscriptionController.getPlans)
router.get('/payment-history', authMiddleware(), SubscriptionController.getPaymentHistory)
router.get('/my', authMiddleware(), SubscriptionController.getMySubscription)
router.post('/payment/create-order', authMiddleware(), SubscriptionController.createOrder)
router.post('/payment/verify', authMiddleware(), SubscriptionController.verifyPayment)
router.post('/payment/mock', authMiddleware(), SubscriptionController.mockPayment)

export default router
