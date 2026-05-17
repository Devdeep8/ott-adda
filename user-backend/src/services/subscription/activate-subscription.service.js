import { prisma } from '../../lib/prisma.js'
import AppError from '../../errors/app.error.js'

export async function activateSubscription(userId, planId) {
  const plan = await prisma.subscriptionPlan.findUnique({ where: { id: planId } })
  if (!plan) throw new AppError('Plan not found', 404)

  const now = new Date()
  const endDate = new Date(now.getTime() + plan.durationDays * 24 * 60 * 60 * 1000)

  const existing = await prisma.userSubscription.findUnique({ where: { userId } })

  let subscription
  if (existing) {
    subscription = await prisma.userSubscription.update({
      where: { userId },
      data: {
        planId: plan.id,
        status: 'ACTIVE',
        startDate: now,
        endDate,
      },
      include: { plan: true },
    })
  } else {
    subscription = await prisma.userSubscription.create({
      data: {
        userId,
        planId: plan.id,
        status: 'ACTIVE',
        startDate: now,
        endDate,
      },
      include: { plan: true },
    })
  }

  return subscription
}

export default activateSubscription