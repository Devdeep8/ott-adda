import { BaseService } from '@/src/lib/base.service.js'
import { AppError } from '@/src/errors/app.error.js'
import { Errors } from '@/src/errors/errorCodes.js'

export class CreateCategoryService extends BaseService {
  async run() {
    const {
      name,
      slug,
      type,
      description,
      iconUrl,
      metadata,
      order = 0
    } = this.args

    // Validate category type
    const validTypes = ['TOP_PICKS', 'RECOMMENDED', 'NEW_RELEASES', 'UPCOMING', 'TRENDING', 'CUSTOM']
    if (!validTypes.includes(type)) {
      throw new AppError(Errors.VALIDATION_ERROR, {
        details: [`Invalid category type. Must be one of: ${validTypes.join(', ')}`]
      })
    }

    // Check if slug already exists
    const existingCategory = await this.db.category.findUnique({
      where: { slug }
    })

    if (existingCategory) {
      throw new AppError(Errors.VALIDATION_ERROR, {
        details: [`Category with slug '${slug}' already exists`]
      })
    }

    // Create category
    const category = await this.db.category.create({
      data: {
        name,
        slug,
        type,
        description,
        iconUrl,
        metadata: metadata ? JSON.parse(metadata) : null,
        order: Number(order)
      }
    })

    return category
  }
}