import { BaseService } from '@/src/lib/base.service.js'
import { AppError } from '@/src/errors/app.error.js'
import { Errors } from '@/src/errors/errorCodes.js'

export class UpdatePlanService extends BaseService {
  async run() {
    const { id } = this.args
    const updateData = { ...this.args }
    delete updateData.id

    // Check if plan exists
    const existingPlan = await this.db.subscriptionPlan.findUnique({
      where: { id: Number(id) }
    })

    if (!existingPlan) {
      throw new AppError(Errors.NOT_FOUND, {
        details: [`Plan with ID ${id} not found`]
      })
    }

    // Validate plan type if provided
    if (updateData.type) {
      const validTypes = ['FREE', 'MONTHLY', 'YEARLY']
      if (!validTypes.includes(updateData.type)) {
        throw new AppError(Errors.VALIDATION_ERROR, {
          details: [`Invalid plan type. Must be one of: ${validTypes.join(', ')}`]
        })
      }
    }

    // Parse JSON fields
    if (updateData.features && typeof updateData.features === 'string') {
      try {
        updateData.features = JSON.parse(updateData.features)
      } catch (e) {
        throw new AppError(Errors.VALIDATION_ERROR, {
          details: ['Invalid JSON format for features']
        })
      }
    }

    // Convert numeric fields
    if (updateData.price !== undefined) {
      updateData.price = Number(updateData.price)
    }
    if (updateData.durationDays !== undefined) {
      updateData.durationDays = Number(updateData.durationDays)
    }

    // Update plan
    const plan = await this.db.subscriptionPlan.update({
      where: { id: Number(id) },
      data: updateData
    })

    return plan
  }
}