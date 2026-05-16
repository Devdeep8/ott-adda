import { BaseService } from '@/src/lib/base.service.js'

export class UpdateCategoryOrderService extends BaseService {
  async run() {
    const { orders } = this.args

    // Update category orders
    await Promise.all(
      orders.map(({ id, order }) =>
        this.db.category.update({
          where: { id: Number(id) },
          data: { order: Number(order) }
        })
      )
    )

    return { message: 'Category orders updated successfully' }
  }
}