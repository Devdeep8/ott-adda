import { BaseService } from '@/src/lib/base.service.js'

export class ListCategoriesService extends BaseService {
  async run() {
    const categories = await this.db.category.findMany({
      where: { isActive: true },
      orderBy: { order: 'asc' },
      select: {
        id: true,
        name: true,
        slug: true,
        type: true,
        description: true,
        iconUrl: true,
        order: true
      }
    })

    return { categories }
  }
}