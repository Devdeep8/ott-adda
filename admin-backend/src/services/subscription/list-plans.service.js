import { BaseService } from '@/src/lib/base.service.js'

export class ListPlansService extends BaseService {
  async run() {
    const { page = 1, limit = 10, type, isActive } = this.args

    const where = {}
    if (type) where.type = type
    if (isActive !== undefined) where.isActive = isActive === 'true'

    const [plans, total] = await Promise.all([
      this.db.subscriptionPlan.findMany({
        where,
        skip: (page - 1) * limit,
        take: Number(limit),
        orderBy: { createdAt: 'desc' },
        include: {
          subscriptions: {
            select: {
              id: true,
              status: true
            }
          }
        }
      }),
      this.db.subscriptionPlan.count({ where })
    ])

    // Calculate subscription counts for each plan
    const plansWithStats = plans.map(plan => ({
      ...plan,
      subscriptionStats: {
        total: plan.subscriptions.length,
        active: plan.subscriptions.filter(s => s.status === 'ACTIVE').length
      },
      subscriptions: undefined
    }))

    return {
      plans: plansWithStats,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        totalPages: Math.ceil(total / limit)
      }
    }
  }
}