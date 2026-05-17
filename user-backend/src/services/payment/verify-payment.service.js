import { prisma } from '../../lib/prisma.js'
import { verifyRazorpaySignature } from './razorpay.service.js'
import AppError from '../../errors/app.error.js'
import activateSubscription from '../../services/subscription/activate-subscription.service.js'

export async function verifyPayment(userId, { razorpayOrderId, razorpayPaymentId, razorpaySignature, planId }) {
  const valid = verifyRazorpaySignature(razorpayOrderId, razorpayPaymentId, razorpaySignature)
  if (!valid) throw new AppError('Payment verification failed', 400)

  const payment = await prisma.payment.findUnique({ where: { razorpayOrderId } })
  if (!payment) throw new AppError('Payment record not found', 404)

  await prisma.payment.update({
    where: { id: payment.id },
    data: {
      status: 'SUCCESS',
      razorpayPaymentId,
      razorpaySignature,
      paidAt: new Date(),
    },
  })

  await activateSubscription(userId, planId)

  return { success: true, message: 'Subscription activated!' }
}

export default verifyPayment