import { sendResponse } from '../../helpers/response.helpers.js'
import { ListCategoriesService } from '@/src/services/category/list-categories.service.js'
export class CategoryController  {
  async list(req, res, next) {
    try {
      const result = await ListCategoriesService.execute({}, req.context)
      sendResponse({ req, res, next }, result, 'categoris successful')
    } catch (error) {
      return next(error)
    }
  }

  async getBySlug(req, res, next) {
    try {
      const { GetCategoryService } = await import('@/src/services/category/get-category.service.js')
      const result = await GetCategoryService.execute({ slug: req.params.slug }, req.context)
      sendResponse({ req, res, next }, result, 'categoris successful')
    } catch (error) {
      return next(error)
    }
  }

  async getSeries(req, res, next) {
    try {
      const { GetCategorySeriesService } = await import('@/src/services/category/get-category-series.service.js')
      const result = await GetCategorySeriesService.execute(
        { slug: req.params.slug, ...req.query },
        req.context
      )
      sendResponse({ req, res, next }, result, 'categoris successful')
    } catch (error) {
      return next(error)
    }
  }
}