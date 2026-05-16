import { BaseService } from '@/src/lib/base.service.js'
import { NotFoundError } from '@/src/errors/not-found.error.js'

type DeleteSeriesArgs = { id: string }

export class DeleteSeriesService extends BaseService {
  static async execute(idOrArgs: string | DeleteSeriesArgs, context: Record<string, unknown> = {}) {
    const args = typeof idOrArgs === 'string' ? { id: idOrArgs } : idOrArgs
    return super.execute(args, context)
  }

  async run() {
    const { id } = this.args as DeleteSeriesArgs

    const existing = await this.db.series.findUnique({ where: { id } })
    if (!existing) {
      throw new NotFoundError('Series not found', { traceId: this.traceId })
    }

    await this.db.$transaction(async (tx) => {
      await tx.episode.deleteMany({ where: { seriesId: id } })
      await tx.series.delete({ where: { id } })
    })

    return { success: true }
  }
}
