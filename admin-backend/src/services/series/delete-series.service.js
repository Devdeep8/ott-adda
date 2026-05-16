import { BaseService } from '@/src/lib/base.service.js'
import { AppError } from '@/src/errors/app.error.js'
import { Errors } from '@/src/errors/errorCodes.js'

export class DeleteSeriesService extends BaseService {
  async run() {
    const { id, hardDelete = false } = this.args

    // Check if series exists
    const existingSeries = await this.db.series.findUnique({
      where: { id: Number(id) }
    })

    if (!existingSeries) {
      throw new AppError(Errors.NOT_FOUND, {
        details: [`Series with ID ${id} not found`]
      })
    }

    if (hardDelete) {
      // Hard delete - permanently remove
      await this.db.series.delete({
        where: { id: Number(id) }
      })
    } else {
      // Soft delete
      await this.db.series.update({
        where: { id: Number(id) },
        data: { deletedAt: new Date() }
      })
    }

    return { message: 'Series deleted successfully' }
  }
}