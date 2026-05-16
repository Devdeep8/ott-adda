import { BaseService } from '@/src/lib/base.service.js'
import { AppError } from '@/src/errors/app.error.js'
import { Errors } from '@/src/errors/errorCodes.js'

export class GetSubscriptionService extends BaseService {
  async run() {
    const { id } = this.args

    const subscription = await this.db.userSubscription.findUnique({
      where: { id: Number(id) },
      include: {
        plan: true,
        user: {
          include: {
            profile: true
          }
        }
      }
    })

    if (!subscription) {
      throw new AppError(Errors.NOT_FOUND, {
        details: [`Subscription with ID ${id} not found`]
      })
    }

    return subscription
  }
}