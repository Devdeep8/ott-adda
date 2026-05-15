import { sendResponse } from '@/src/helpers/response.helpers.js'

export class CategoryController  {
  async list(req, res, next) {
    try {
      const { ListCategoriesService } = await import('@/src/services/category/list-categories.service.js')
      const result = await ListCategoriesService.execute({}, req.context)
      return sendResponse(req, res, result, 'Categories fetched')
    } catch (error) {
      return next(error)
    }
  }

  async getBySlug(req, res, next) {
    try {
      const { GetCategoryService } = await import('@/src/services/category/get-category.service.js')
      const result = await GetCategoryService.execute({ slug: req.params.slug }, req.context)
      return sendResponse(req, res, result, 'Category fetched')
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
      return sendResponse(req, res, result, 'Category series fetched')
    } catch (error) {
      return next(error)
    }
  }
}