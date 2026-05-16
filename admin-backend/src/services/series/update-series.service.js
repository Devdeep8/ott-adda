import { BaseService } from '@/src/lib/base.service.js'
import { AppError } from '@/src/errors/app.error.js'
import { Errors } from '@/src/errors/errorCodes.js'

export class UpdateSeriesService extends BaseService {
  async run() {
    const { id } = this.args
    const updateData = { ...this.args }
    delete updateData.id

    // Check if series exists
    const existingSeries = await this.db.series.findUnique({
      where: { id: Number(id) }
    })

    if (!existingSeries) {
      throw new AppError(Errors.NOT_FOUND, {
        details: [`Series with ID ${id} not found`]
      })
    }

    // Check if slug is being changed and if it already exists
    if (updateData.slug && updateData.slug !== existingSeries.slug) {
      const slugExists = await this.db.series.findUnique({
        where: { slug: updateData.slug }
      })

      if (slugExists) {
        throw new AppError(Errors.VALIDATION_ERROR, {
          details: [`Series with slug '${updateData.slug}' already exists`]
        })
      }
    }

    // Parse JSON fields
    const jsonFields = ['genres', 'tags', 'cast', 'crew', 'metadata']
    jsonFields.forEach(field => {
      if (updateData[field] && typeof updateData[field] === 'string') {
        try {
          updateData[field] = JSON.parse(updateData[field])
        } catch (e) {
          throw new AppError(Errors.VALIDATION_ERROR, {
            details: [`Invalid JSON format for ${field}`]
          })
        }
      }
    })

    // Convert date if provided
    if (updateData.releaseDate) {
      updateData.releaseDate = new Date(updateData.releaseDate)
    }

    // Convert numeric fields
    if (updateData.duration !== undefined) {
      updateData.duration = Number(updateData.duration)
    }
    if (updateData.rating !== undefined) {
      updateData.rating = Number(updateData.rating)
    }

    // Update series
    const series = await this.db.series.update({
      where: { id: Number(id) },
      data: updateData
    })

    return series
  }
}