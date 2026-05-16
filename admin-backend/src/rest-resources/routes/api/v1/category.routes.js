import { Router } from 'express'
import { CategoryController } from '@/src/rest-resources/controllers/category.controller.js'
import { adminAuthMiddleware } from '@/src/rest-resources/middlewares/admin-auth.middleware.js'

const router = Router()
const categoryController = new CategoryController()

// All category routes require admin authentication
router.get('/', adminAuthMiddleware, categoryController.list.bind(categoryController))
router.get('/:id', adminAuthMiddleware, categoryController.getById.bind(categoryController))
router.post('/', adminAuthMiddleware, categoryController.create.bind(categoryController))
router.put('/:id', adminAuthMiddleware, categoryController.update.bind(categoryController))
router.delete('/:id', adminAuthMiddleware, categoryController.delete.bind(categoryController))
router.put('/:id/order', adminAuthMiddleware, categoryController.updateOrder.bind(categoryController))
router.put('/:id/series', adminAuthMiddleware, categoryController.updateSeriesOrder.bind(categoryController))

export default router
