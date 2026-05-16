import { BaseService } from '@/src/lib/base.service.js'

export class GetUsersService extends BaseService {
  async run() {
    const { page = 1, limit = 20, role, subscriptionStatus } = this.args

    const where = {}
    if (role) where.role = role

    const [items, total] = await Promise.all([
      this.db.user.findMany({
        where,
        skip: (page - 1) * limit,
        take: Number(limit),
        include: { subscription: { include: { plan: true } } },
        orderBy: { createdAt: 'desc' }
      }),
      this.db.user.count({ where })
    ])

    // If subscriptionStatus filter provided, filter client side
    const filtered = subscriptionStatus
      ? items.filter(u => (u.subscription?.status || null) === subscriptionStatus)
      : items

    return {
      items: filtered,
      page: Number(page),
      limit: Number(limit),
      total
    }
  }
}