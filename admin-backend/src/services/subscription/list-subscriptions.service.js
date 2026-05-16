import { BaseService } from '@/src/lib/base.service.js'

export class ListSubscriptionsService extends BaseService {
  async run() {
    const { page = 1, limit = 10, status, planId, userId } = this.args

    const where = {}
    if (status) where.status = status
    if (planId) where.planId = Number(planId)
    if (userId) where.userId = Number(userId)

    const [subscriptions, total] = await Promise.all([
      this.db.userSubscription.findMany({
        where,
        skip: (page - 1) * limit,
        take: Number(limit),
        orderBy: { createdAt: 'desc' },
        include: {
          plan: true,
          user: {
            select: {
              id: true,
              email: true,
              profile: {
                select: {
                  firstName: true,
                  lastName: true,
                  displayName: true
                }
              }
            }
          }
        }
      }),
      this.db.userSubscription.count({ where })
    ])

    return {
      subscriptions,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        totalPages: Math.ceil(total / limit)
      }
    }
  }
}