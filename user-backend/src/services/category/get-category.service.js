import { BaseService } from '@/src/lib/base.service.js'
import { AppError } from '@/src/errors/app.error.js'
import { Errors } from '@/src/errors/errorCodes.js'

export class GetCategoryService extends BaseService {
  validate() {
    const { slug } = this.args
    if (!slug) {
      throw new AppError(Errors.VALIDATION_ERROR, {
        traceId: this.traceId,
        details: [{ field: 'slug', message: 'Category slug is required' }]
      })
    }
  }

  async run() {
    const { slug } = this.args

    const category = await this.db.category.findUnique({
      where: { slug, isActive: true },
      include: {
        _count: {
          select: { series: true }
        }
      }
    })

    if (!category) {
      throw new AppError(Errors.CATEGORY_NOT_FOUND, { traceId: this.traceId })
    }

    return {
      category: {
        ...category,
        totalSeries: category._count.series
      }
    }
  }
}