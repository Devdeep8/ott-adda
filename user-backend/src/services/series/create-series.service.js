import { BaseService } from '../../lib/base.service.js'
import { AppError } from '../../errors/app.error.js'

const toSlug = (title) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

export class CreateSeriesService extends BaseService {
  static async execute(data, context = {}) {
    return super.execute(data, context)
  }

  validate() {
    const { title, genres, status } = this.args
    const errors = []

    if (!title) errors.push({ field: 'title', message: 'Title is required' })
    if (!Array.isArray(genres) || genres.length === 0) {
      errors.push({ field: 'genres', message: 'At least one genre is required' })
    }
    if (!status) errors.push({ field: 'status', message: 'Status is required' })

    if (errors.length > 0) {
      throw AppError.validation(errors, this.traceId)
    }
  }

  async run() {
    const data = this.args

    const baseSlug = toSlug(data.title)
    let slug = baseSlug
    let suffix = 2

    while (await this.db.series.findUnique({ where: { slug } })) {
      slug = `${baseSlug}-${suffix}`
      suffix += 1
    }

    const created = await this.db.series.create({
      data: {
        title: data.title,
        slug,
        description: data.description,
        genres: data.genres,
        status: data.status,
        releaseDate: data.releaseDate ? new Date(data.releaseDate) : undefined,
        isFeatured: data.isFeatured ?? false,
        thumbnailUrl: data.thumbnailUrl,
        bannerUrl: data.bannerUrl,
      },
    })

    return created
  }
}