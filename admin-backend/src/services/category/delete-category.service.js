import { BaseService } from '@/src/lib/base.service.js'
import { AppError } from '@/src/errors/app.error.js'
import { Errors } from '@/src/errors/errorCodes.js'

export class DeleteCategoryService extends BaseService {
  async run() {
    const { id, hardDelete = false } = this.args

    // Check if category exists
    const existingCategory = await this.db.category.findUnique({
      where: { id: Number(id) }
    })

    if (!existingCategory) {
      throw new AppError(Errors.NOT_FOUND, {
        details: [`Category with ID ${id} not found`]
      })
    }

    if (hardDelete) {
      // Hard delete - permanently remove
      await this.db.category.delete({
        where: { id: Number(id) }
      })
    } else {
      // Soft delete by deactivating
      await this.db.category.update({
        where: { id: Number(id) },
        data: { isActive: false }
      })
    }

    return { message: 'Category deleted successfully' }
  }
}