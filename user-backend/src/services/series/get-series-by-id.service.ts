import { BaseService } from '@/src/lib/base.service.js'
import { NotFoundError } from '@/src/errors/not-found.error.js'

type GetSeriesByIdArgs = { id: string }

export class GetSeriesByIdService extends BaseService {
  static async execute(idOrArgs: string | GetSeriesByIdArgs, context: Record<string, unknown> = {}) {
    const args = typeof idOrArgs === 'string' ? { id: idOrArgs } : idOrArgs
    return super.execute(args, context)
  }

  validate() {
    const { id } = this.args as GetSeriesByIdArgs
    if (!id) {
      throw new NotFoundError('Series not found', { traceId: this.traceId })
    }
  }

  async run() {
    const { id } = this.args as GetSeriesByIdArgs

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
