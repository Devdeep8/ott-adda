import { BaseService } from '@/src/lib/base.service.js'
import { AppError } from '@/src/errors/app.error.js'
import { Errors } from '@/src/errors/errorCodes.js'

export class GetSeriesService extends BaseService {
  async run() {
    const { id } = this.args

    const series = await this.db.series.findUnique({
      where: { id: Number(id) },
      include: {
        episodes: {
          where: { deletedAt: null },
          orderBy: [
            { season: 'asc' },
            { episodeNumber: 'asc' }
          ]
        },
        categories: {
          include: {
            category: true
          },
          orderBy: {
            order: 'asc'
          }
        }
      }
    })

    if (!series) {
      throw new AppError(Errors.NOT_FOUND, {
        details: [`Series with ID ${id} not found`]
      })
    }

    return series
  }
}