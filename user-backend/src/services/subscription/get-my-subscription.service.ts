import { prisma } from '@/src/lib/prisma.js'

export async function getMySubscription(userId: string) {
  const subscription = await prisma.userSubscription.findUnique({
    where: { userId },
    include: { plan: true },
  })

  if (!subscription) return null

  const now = new Date()
  const daysRemaining = Math.max(0, Math.ceil((subscription.endDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)))

  return { ...subscription, daysRemaining }
}

export default getMySubscription
