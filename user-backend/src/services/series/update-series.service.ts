import { BaseService } from '@/src/lib/base.service.js'
import { NotFoundError } from '@/src/errors/not-found.error.js'
import type { UpdateSeriesInput } from '@/src/types/series.types.js'

type UpdateSeriesArgs = {
  id: string
  data: UpdateSeriesInput
}

const toSlug = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

export class UpdateSeriesService extends BaseService {
  static async execute(id: string, data: UpdateSeriesInput, context: Record<string, unknown> = {}) {
    return super.execute({ id, data }, context)
  }

  async run() {
    const { id, data } = this.args as UpdateSeriesArgs

    const existing = await this.db.series.findUnique({ where: { id } })
    if (!existing) {
      throw new NotFoundError('Series not found', { traceId: this.traceId })
    }

    let slug = existing.slug
    if (data.title && data.title !== existing.title) {
      const baseSlug = toSlug(data.title)
      slug = baseSlug
      let suffix = 2

      while (true) {
        const slugSeries = await this.db.series.findUnique({ where: { slug } })
        if (!slugSeries || slugSeries.id === id) break
        slug = `${baseSlug}-${suffix}`
        suffix += 1
      }
    }

    const updated = await this.db.series.update({
      where: { id },
      data: {
        ...(data.title !== undefined ? { title: data.title } : {}),
        ...(data.description !== undefined ? { description: data.description } : {}),
        ...(data.genres !== undefined ? { genres: data.genres } : {}),
        ...(data.status !== undefined ? { status: data.status } : {}),
        ...(data.releaseDate !== undefined
          ? { releaseDate: data.releaseDate ? new Date(data.releaseDate) : null }
          : {}),
        ...(data.isFeatured !== undefined ? { isFeatured: data.isFeatured } : {}),
        ...(data.thumbnailUrl !== undefined ? { thumbnailUrl: data.thumbnailUrl } : {}),
        ...(data.bannerUrl !== undefined ? { bannerUrl: data.bannerUrl } : {}),
        ...(slug !== existing.slug ? { slug } : {}),
      },
    })

    return updated
  }
}
