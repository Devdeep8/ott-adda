import { BaseService } from '@/src/lib/base.service.js'
import { AppError } from '@/src/errors/app.error.js'
import { Errors } from '@/src/errors/errorCodes.js'

export class UpdateSeriesStatusService extends BaseService {
  async run() {
    const { id, status } = this.args

    // Validate status
    const validStatuses = ['DRAFT', 'PUBLISHED', 'ARCHIVED']
    if (!validStatuses.includes(status)) {
      throw new AppError(Errors.VALIDATION_ERROR, {
        details: [`Invalid status. Must be one of: ${validStatuses.join(', ')}`]
      })
    }

    // Check if series exists
    const existingSeries = await this.db.series.findUnique({
      where: { id: Number(id) }
    })

    if (!existingSeries) {
      throw new AppError(Errors.NOT_FOUND, {
        details: [`Series with ID ${id} not found`]
      })
    }

    // Update status
    const series = await this.db.series.update({
      where: { id: Number(id) },
      data: { status }
    })

    return series
  }
}