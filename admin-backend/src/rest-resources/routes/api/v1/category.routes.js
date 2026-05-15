import { Router } from 'express'
import { CategoryController } from '@/src/rest-resources/controllers/category.controller.js'
import { adminAuthMiddleware } from '@/src/rest-resources/middlewares/admin-auth.middleware.js'

const router = Router()
const categoryController = new CategoryController()

// All category routes require admin authentication
router.get('/', adminAuthMiddleware, categoryController.list)
router.get('/:id', adminAuthMiddleware, categoryController.getById)
router.post('/', adminAuthMiddleware, categoryController.create)
router.put('/:id', adminAuthMiddleware, categoryController.update)
router.delete('/:id', adminAuthMiddleware, categoryController.delete)
router.put('/:id/order', adminAuthMiddleware, categoryController.updateOrder)
router.put('/:id/series', adminAuthMiddleware, categoryController.updateSeriesOrder)

export default router
