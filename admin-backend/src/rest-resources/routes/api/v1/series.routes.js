import { Router } from 'express'
import { SeriesController } from '@/src/rest-resources/controllers/series.controller.js'
import { adminAuthMiddleware } from '@/src/rest-resources/middlewares/admin-auth.middleware.js'

const router = Router()
const seriesController = new SeriesController()

// All series routes require admin authentication
router.get('/', adminAuthMiddleware, seriesController.list)
router.get('/:id', adminAuthMiddleware, seriesController.getById)
router.post('/', adminAuthMiddleware, seriesController.create)
router.put('/:id', adminAuthMiddleware, seriesController.update)
router.delete('/:id', adminAuthMiddleware, seriesController.delete)
router.patch('/:id/status', adminAuthMiddleware, seriesController.updateStatus)

export default router
