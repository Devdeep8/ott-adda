import { prisma } from '@/src/lib/prisma.js'

export async function getActivePlans() {
  const plans = await prisma.subscriptionPlan.findMany({
    where: { isActive: true },
    orderBy: { priceInPaise: 'asc' },
  })
  return plans
}

export default getActivePlans
