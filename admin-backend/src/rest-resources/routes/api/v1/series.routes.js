import { Router } from 'express'
import { SeriesController } from '@/src/rest-resources/controllers/series.controller.js'
import { adminAuthMiddleware } from '@/src/rest-resources/middlewares/admin-auth.middleware.js'

const router = Router()
const seriesController = new SeriesController()

// All series routes require admin authentication
router.get('/', adminAuthMiddleware, seriesController.list.bind(seriesController))
router.get('/:id', adminAuthMiddleware, seriesController.getById.bind(seriesController))
router.post('/', adminAuthMiddleware, seriesController.create.bind(seriesController))
router.put('/:id', adminAuthMiddleware, seriesController.update.bind(seriesController))
router.delete('/:id', adminAuthMiddleware, seriesController.delete.bind(seriesController))
router.patch('/:id/status', adminAuthMiddleware, seriesController.updateStatus.bind(seriesController))

export default router
