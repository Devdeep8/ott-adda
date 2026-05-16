import { BaseService } from '@/src/lib/base.service.js'
import { AppError } from '@/src/errors/app.error.js'
import { Errors } from '@/src/errors/errorCodes.js'

export class DeletePlanService extends BaseService {
  async run() {
    const { id } = this.args

    // Check if plan exists
    const existingPlan = await this.db.subscriptionPlan.findUnique({
      where: { id: Number(id) },
      include: {
        subscriptions: {
          where: { status: 'ACTIVE' }
        }
      }
    })

    if (!existingPlan) {
      throw new AppError(Errors.NOT_FOUND, {
        details: [`Plan with ID ${id} not found`]
      })
    }

    // Check if plan has active subscriptions
    if (existingPlan.subscriptions.length > 0) {
      throw new AppError(Errors.VALIDATION_ERROR, {
        details: ['Cannot delete plan with active subscriptions']
      })
    }

    // Soft delete by deactivating
    await this.db.subscriptionPlan.update({
      where: { id: Number(id) },
      data: { isActive: false }
    })

    return { message: 'Plan deactivated successfully' }
  }
}