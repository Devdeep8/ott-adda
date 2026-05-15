import { Router } from 'express'
import { EpisodeController } from '@/src/rest-resources/controllers/episode.controller.js'
import { adminAuthMiddleware } from '@/src/rest-resources/middlewares/admin-auth.middleware.js'

const router = Router()
const episodeController = new EpisodeController()

// All episode routes require admin authentication
router.get('/', adminAuthMiddleware, episodeController.list)
router.get('/:id', adminAuthMiddleware, episodeController.getById)
router.post('/', adminAuthMiddleware, episodeController.create)
router.put('/:id', adminAuthMiddleware, episodeController.update)
router.delete('/:id', adminAuthMiddleware, episodeController.delete)

export default router
