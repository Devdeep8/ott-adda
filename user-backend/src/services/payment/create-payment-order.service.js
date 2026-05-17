import { prisma } from '../../lib/prisma.js'
import { createRazorpayOrder } from './razorpay.service.js'
import AppError from '../../errors/app.error.js'

export async function createPaymentOrder(userId, planId) {
  const plan = await prisma.subscriptionPlan.findUnique({ where: { id: planId } })
  if (!plan) throw new AppError('Plan not found', 404)

  const order = await createRazorpayOrder(plan.priceInPaise)

  const payment = await prisma.payment.create({
    data: {
      userId,
      planId: plan.id,
      amountInPaise: plan.priceInPaise,
      razorpayOrderId: order.id,
      status: 'PENDING',
    },
  })

  return { orderId: order.id, amount: plan.priceInPaise, currency: 'INR', planName: plan.name }
}

export default createPaymentOrder