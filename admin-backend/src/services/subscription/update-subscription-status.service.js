import { BaseService } from '@/src/lib/base.service.js'
import { AppError } from '@/src/errors/app.error.js'
import { Errors } from '@/src/errors/errorCodes.js'

export class UpdateSubscriptionStatusService extends BaseService {
  async run() {
    const { id, status, endDate } = this.args

    // Validate status
    const validStatuses = ['ACTIVE', 'CANCELLED', 'EXPIRED', 'PENDING', 'PAUSED']
    if (!validStatuses.includes(status)) {
      throw new AppError(Errors.VALIDATION_ERROR, {
        details: [`Invalid status. Must be one of: ${validStatuses.join(', ')}`]
      })
    }

    // Check if subscription exists
    const existingSubscription = await this.db.userSubscription.findUnique({
      where: { id: Number(id) }
    })

    if (!existingSubscription) {
      throw new AppError(Errors.NOT_FOUND, {
        details: [`Subscription with ID ${id} not found`]
      })
    }

    const updateData = { status }

    // Set cancelledAt if status is CANCELLED
    if (status === 'CANCELLED' && !existingSubscription.cancelledAt) {
      updateData.cancelledAt = new Date()
    }

    // Update endDate if provided
    if (endDate) {
      updateData.endDate = new Date(endDate)
    }

    // Update subscription
    const subscription = await this.db.userSubscription.update({
      where: { id: Number(id) },
      data: updateData
    })

    return subscription
  }
}