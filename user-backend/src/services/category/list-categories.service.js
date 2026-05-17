import { BaseService } from '../../lib/base.service.js'

export class ListCategoriesService extends BaseService {


  async run() {
    const categories = await this.db.category.findMany({
      where: { isActive: true },
      orderBy: { displayOrder: 'asc' },
      select: {
        id: true,
        name: true,
        slug: true,
        description: true,
        displayOrder: true
      }
    })

    return { categories }
  }
}