import activateSubscription from '../../services/subscription/activate-subscription.service.js'
import AppError from '../../errors/app.error.js'

export async function mockPayment(userId, planId) {
  if (process.env.NODE_ENV === 'production') throw new AppError('Mock payment not allowed in production', 403)

  await activateSubscription(userId, planId)

  return { success: true, message: 'Mock payment successful' }
}

export default mockPayment