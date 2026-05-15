import { Router } from 'express'
import { CategoryController } from '@/src/rest-resources/controllers/category.controller.js'

const router = Router()
const categoryController = new CategoryController()

// Public routes
router.get('/', categoryController.list)
router.get('/:slug', categoryController.getBySlug)
router.get('/:slug/series', categoryController.getSeries)

export default router