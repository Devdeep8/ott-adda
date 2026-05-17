import { BaseService } from '../../lib/base.service.js'
import { NotFoundError } from '../../errors/not-found.error.js'

export class GetSeriesByIdService extends BaseService {
  static async execute(idOrArgs, context = {}) {
    const args = typeof idOrArgs === 'string' ? { id: idOrArgs } : idOrArgs
    return super.execute(args, context)
  }

  validate() {
    const { id } = this.args
    if (!id) {
      throw new NotFoundError('Series not found', { traceId: this.traceId })
    }
  }

  async run() {
    const { id } = this.args

    const series = await this.db.series.findUnique({
      where: { id },
      include: {
        episodes: {
          orderBy: { episodeNumber: 'asc' },
        },
      },
    })

    if (!series) {
      throw new NotFoundError('Series not found', { traceId: this.traceId })
    }

    return series
  }
}