import { BaseService } from '@/src/lib/base.service.js'
import { AppError } from '@/src/errors/app.error.js'
import { Errors } from '@/src/errors/errorCodes.js'

export class ManageSeriesCategoriesService extends BaseService {
  async run() {
    const { seriesId, categoryIds, action = 'add' } = this.args

    // Check if series exists
    const series = await this.db.series.findUnique({
      where: { id: Number(seriesId) }
    })

    if (!series) {
      throw new AppError(Errors.NOT_FOUND, {
        details: [`Series with ID ${seriesId} not found`]
      })
    }

    // Validate categories exist
    const categories = await this.db.category.findMany({
      where: {
        id: { in: categoryIds.map(id => Number(id)) },
        isActive: true
      }
    })

    if (categories.length !== categoryIds.length) {
      throw new AppError(Errors.VALIDATION_ERROR, {
        details: ['One or more categories not found or inactive']
      })
    }

    if (action === 'add') {
      // Add categories to series
      const categoryAssignments = await Promise.all(
        categoryIds.map((categoryId, index) =>
          this.db.seriesCategory.upsert({
            where: {
              seriesId_categoryId: {
                seriesId: Number(seriesId),
                categoryId: Number(categoryId)
              }
            },
            update: {},
            create: {
              seriesId: Number(seriesId),
              categoryId: Number(categoryId),
              order: index
            }
          })
        )
      )

      return { message: 'Categories added to series', assignments: categoryAssignments }
    } else if (action === 'remove') {
      // Remove categories from series
      await this.db.seriesCategory.deleteMany({
        where: {
          seriesId: Number(seriesId),
          categoryId: { in: categoryIds.map(id => Number(id)) }
        }
      })

      return { message: 'Categories removed from series' }
    } else if (action === 'set') {
      // Replace all categories for series
      await this.db.seriesCategory.deleteMany({
        where: { seriesId: Number(seriesId) }
      })

      const categoryAssignments = await Promise.all(
        categoryIds.map((categoryId, index) =>
          this.db.seriesCategory.create({
            data: {
              seriesId: Number(seriesId),
              categoryId: Number(categoryId),
              order: index
            }
          })
        )
      )

      return { message: 'Categories updated for series', assignments: categoryAssignments }
    } else {
      throw new AppError(Errors.VALIDATION_ERROR, {
        details: ['Invalid action. Must be add, remove, or set']
      })
    }
  }
}