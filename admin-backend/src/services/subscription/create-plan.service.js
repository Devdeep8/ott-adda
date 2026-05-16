import { BaseService } from '@/src/lib/base.service.js'
import { AppError } from '@/src/errors/app.error.js'
import { Errors } from '@/src/errors/errorCodes.js'

export class CreatePlanService extends BaseService {
  async run() {
    const {
      name,
      description,
      type,
      price,
      currency = 'INR',
      durationDays,
      features,
      stripePriceId,
      razorpayPlanId
    } = this.args

    // Validate plan type
    const validTypes = ['FREE', 'MONTHLY', 'YEARLY']
    if (!validTypes.includes(type)) {
      throw new AppError(Errors.VALIDATION_ERROR, {
        details: [`Invalid plan type. Must be one of: ${validTypes.join(', ')}`]
      })
    }

    // Validate price for paid plans
    if ((type === 'MONTHLY' || type === 'YEARLY') && (!price || price <= 0)) {
      throw new AppError(Errors.VALIDATION_ERROR, {
        details: ['Price is required for paid plans and must be greater than 0']
      })
    }

    // Create plan
    const plan = await this.db.subscriptionPlan.create({
      data: {
        name,
        description,
        type,
        price: type === 'FREE' ? 0 : Number(price),
        currency,
        durationDays: Number(durationDays),
        features: features ? JSON.parse(features) : null,
        stripePriceId,
        razorpayPlanId,
        isActive: true
      }
    })

    return plan
  }
}