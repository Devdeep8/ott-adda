import { BaseController } from '@/src/lib/base.controller.js'
import { sendResponse } from '@/src/helpers/response.helpers.js'
import { ListCategoriesService } from '@/src/services/category/list-categories.service.js'
import { CreateCategoryService } from '@/src/services/category/create-category.service.js'
import { GetCategoryService } from '@/src/services/category/get-category.service.js'
import { UpdateCategoryService } from '@/src/services/category/update-category.service.js'
import { DeleteCategoryService } from '@/src/services/category/delete-category.service.js'
import { UpdateCategoryOrderService } from '@/src/services/category/update-category-order.service.js'
import { UpdateSeriesCategoryOrderService } from '@/src/services/category/update-series-category-order.service.js'

export class CategoryController extends BaseController {
  async list(req, res) {
    try {
      const service = new ListCategoriesService(req.query, req.context)
      const result = await service.run()
      return sendResponse(req, res, result, 'Categories list fetched')
    } catch (error) {
      return this.handleError(error, res)
    }
  }

  async getById(req, res) {
    try {
      const service = new GetCategoryService({ id: req.params.id }, req.context)
      const result = await service.run()
      return sendResponse(req, res, result, 'Category fetched')
    } catch (error) {
      return this.handleError(error, res)
    }
  }

  async create(req, res) {
    try {
      const service = new CreateCategoryService(req.body, req.context)
      const result = await service.run()
      return sendResponse(req, res, result, 'Category created')
    } catch (error) {
      return this.handleError(error, res)
    }
  }

  async update(req, res) {
    try {
      const service = new UpdateCategoryService({ id: req.params.id, ...req.body }, req.context)
      const result = await service.run()
      return sendResponse(req, res, result, 'Category updated')
    } catch (error) {
      return this.handleError(error, res)
    }
  }

  async delete(req, res) {
    try {
      const service = new DeleteCategoryService({ id: req.params.id, hardDelete: req.query.hardDelete === 'true' }, req.context)
      const result = await service.run()
      return sendResponse(req, res, result, 'Category deleted')
    } catch (error) {
      return this.handleError(error, res)
    }
  }

  async updateOrder(req, res) {
    try {
      const service = new UpdateCategoryOrderService(req.body, req.context)
      const result = await service.run()
      return sendResponse(req, res, result, 'Category order updated')
    } catch (error) {
      return this.handleError(error, res)
    }
  }

  async updateSeriesOrder(req, res) {
    try {
      const service = new UpdateSeriesCategoryOrderService(
        { categoryId: req.params.id, ...req.body },
        req.context
      )
      const result = await service.run()
      return sendResponse(req, res, result, 'Series order updated in category')
    } catch (error) {
      return this.handleError(error, res)
    }
  }
}
