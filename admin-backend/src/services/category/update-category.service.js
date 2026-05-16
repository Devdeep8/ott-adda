import { BaseService } from '@/src/lib/base.service.js'
import { AppError } from '@/src/errors/app.error.js'
import { Errors } from '@/src/errors/errorCodes.js'

export class UpdateCategoryService extends BaseService {
  async run() {
    const { id } = this.args
    const updateData = { ...this.args }
    delete updateData.id

    // Check if category exists
    const existingCategory = await this.db.category.findUnique({
      where: { id: Number(id) }
    })

    if (!existingCategory) {
      throw new AppError(Errors.NOT_FOUND, {
        details: [`Category with ID ${id} not found`]
      })
    }

    // Check if slug is being changed and if it already exists
    if (updateData.slug && updateData.slug !== existingCategory.slug) {
      const slugExists = await this.db.category.findUnique({
        where: { slug: updateData.slug }
      })

      if (slugExists) {
        throw new AppError(Errors.VALIDATION_ERROR, {
          details: [`Category with slug '${updateData.slug}' already exists`]
        })
      }
    }

    // Validate category type if provided
    if (updateData.type) {
      const validTypes = ['TOP_PICKS', 'RECOMMENDED', 'NEW_RELEASES', 'UPCOMING', 'TRENDING', 'CUSTOM']
      if (!validTypes.includes(updateData.type)) {
        throw new AppError(Errors.VALIDATION_ERROR, {
          details: [`Invalid category type. Must be one of: ${validTypes.join(', ')}`]
        })
      }
    }

    // Parse JSON fields
    if (updateData.metadata && typeof updateData.metadata === 'string') {
      try {
        updateData.metadata = JSON.parse(updateData.metadata)
      } catch (e) {
        throw new AppError(Errors.VALIDATION_ERROR, {
          details: ['Invalid JSON format for metadata']
        })
      }
    }

    // Convert numeric fields
    if (updateData.order !== undefined) {
      updateData.order = Number(updateData.order)
    }

    // Update category
    const category = await this.db.category.update({
      where: { id: Number(id) },
      data: updateData
    })

    return category
  }
}