import { BaseService } from '@/src/lib/base.service.js'
import { AppError } from '@/src/errors/app.error.js'
import { Errors } from '@/src/errors/errorCodes.js'

export class UpdateSeriesCategoryOrderService extends BaseService {
  async run() {
    const { categoryId, seriesOrders } = this.args

    // Check if category exists
    const category = await this.db.category.findUnique({
      where: { id: Number(categoryId) }
    })

    if (!category) {
      throw new AppError(Errors.NOT_FOUND, {
        details: [`Category with ID ${categoryId} not found`]
      })
    }

    // Update series category orders
    await Promise.all(
      seriesOrders.map(({ seriesId, order }) =>
        this.db.seriesCategory.updateMany({
          where: {
            categoryId: Number(categoryId),
            seriesId: Number(seriesId)
          },
          data: { order: Number(order) }
        })
      )
    )

    return { message: 'Series category orders updated successfully' }
  }
}