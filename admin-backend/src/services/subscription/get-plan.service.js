import { BaseService } from '@/src/lib/base.service.js'
import { AppError } from '@/src/errors/app.error.js'
import { Errors } from '@/src/errors/errorCodes.js'

export class GetPlanService extends BaseService {
  async run() {
    const { id } = this.args

    const plan = await this.db.subscriptionPlan.findUnique({
      where: { id: Number(id) },
      include: {
        subscriptions: {
          include: {
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
          },
          orderBy: { createdAt: 'desc' },
          take: 20
        }
      }
    })

    if (!plan) {
      throw new AppError(Errors.NOT_FOUND, {
        details: [`Plan with ID ${id} not found`]
      })
    }

    // Calculate subscription statistics
    const subscriptionStats = {
      total: plan.subscriptions.length,
      active: plan.subscriptions.filter(s => s.status === 'ACTIVE').length,
      expired: plan.subscriptions.filter(s => s.status === 'EXPIRED').length,
      cancelled: plan.subscriptions.filter(s => s.status === 'CANCELLED').length,
      pending: plan.subscriptions.filter(s => s.status === 'PENDING').length
    }

    return {
      ...plan,
      subscriptionStats
    }
  }
}