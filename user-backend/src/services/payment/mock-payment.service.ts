import activateSubscription from '@/src/services/subscription/activate-subscription.service.js'
import AppError from '@/src/errors/app.error.js'

export async function mockPayment(userId: string, planId: string) {
  if (process.env.NODE_ENV === 'production') throw new AppError('Mock payment not allowed in production', 403)

  await activateSubscription(userId, planId)

  return { success: true, message: 'Mock payment successful' }
}

export default mockPayment
