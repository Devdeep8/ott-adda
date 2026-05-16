import type { NextFunction, Request, Response } from 'express'
import { getActivePlans } from '@/src/services/subscription/get-plans.service.js'
import { getMySubscription } from '@/src/services/subscription/get-my-subscription.service.js'
import { createPaymentOrder } from '@/src/services/payment/create-payment-order.service.js'
import { verifyPayment } from '@/src/services/payment/verify-payment.service.js'
import { mockPayment } from '@/src/services/payment/mock-payment.service.js'

class SubscriptionController {
  static async getPlans(_req: Request, res: Response, next: NextFunction) {
    try {
      const plans = await getActivePlans()
      return res.json({ success: true, data: plans })
    } catch (error) {
      return next(error)
    }
  }

  static async getMySubscription(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = (req as any).context?.user?.id ?? (req as any).context?.userId
      if (!userId) return res.status(401).json({ success: false, message: 'Unauthenticated' })

      const subscription = await getMySubscription(userId)
      return res.json({ success: true, data: subscription })
    } catch (error) {
      return next(error)
    }
  }

  static async createOrder(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = (req as any).context?.user?.id ?? (req as any).context?.userId
      const { planId } = req.body
      if (!userId) return res.status(401).json({ success: false, message: 'Unauthenticated' })
      if (!planId) return res.status(400).json({ success: false, message: 'planId required' })

      const order = await createPaymentOrder(userId, planId)
      return res.json({ success: true, data: order })
    } catch (error) {
      return next(error)
    }
  }

  static async verifyPayment(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = (req as any).context?.user?.id ?? (req as any).context?.userId
      if (!userId) return res.status(401).json({ success: false, message: 'Unauthenticated' })

      const { razorpayOrderId, razorpayPaymentId, razorpaySignature, planId } = req.body
      if (!razorpayOrderId || !razorpayPaymentId || !razorpaySignature || !planId) {
        return res.status(400).json({ success: false, message: 'Missing payment verification fields' })
      }

      const result = await verifyPayment(userId, { razorpayOrderId, razorpayPaymentId, razorpaySignature, planId })
      return res.json({ success: true, data: result })
    } catch (error) {
      return next(error)
    }
  }

  static async mockPayment(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = (req as any).context?.user?.id ?? (req as any).context?.userId
      const { planId } = req.body
      if (!userId) return res.status(401).json({ success: false, message: 'Unauthenticated' })
      if (!planId) return res.status(400).json({ success: false, message: 'planId required' })

      const result = await mockPayment(userId, planId)
      return res.json({ success: true, data: result })
    } catch (error) {
      return next(error)
    }
  }

  static async getPaymentHistory(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = (req as any).context?.user?.id ?? (req as any).context?.userId
      if (!userId) return res.status(401).json({ success: false, message: 'Unauthenticated' })

      const { page = 1, limit = 10, status } = req.query

      // Import prisma here to avoid circular dependency
      const { prisma } = await import('@/src/lib/prisma.js')

      const where: any = { userId }
      if (status) {
        where.status = status as string
      }

      const [payments, total] = await Promise.all([
        prisma.payment.findMany({
          where,
          include: {
            userSubscription: {
              include: {
                plan: {
                  select: { name: true },
                },
              },
            },
          },
          orderBy: { createdAt: 'desc' },
          skip: (Number(page) - 1) * Number(limit),
          take: Number(limit),
        }),
        prisma.payment.count({ where }),
      ])

      const formattedPayments = payments.map((p) => ({
        id: p.id,
        razorpayOrderId: p.razorpayOrderId,
        razorpayPaymentId: p.razorpayPaymentId,
        amount: p.amount,
        status: p.status,
        createdAt: p.createdAt,
        subscription: p.userSubscription
          ? {
              plan: { name: p.userSubscription.plan?.name || 'N/A' },
            }
          : null,
      }))

      return res.json({
        success: true,
        data: formattedPayments,
        pagination: {
          total,
          page: Number(page),
          limit: Number(limit),
          pages: Math.ceil(total / Number(limit)),
        },
      })
    } catch (error) {
      return next(error)
    }
  }
}

export default SubscriptionController
