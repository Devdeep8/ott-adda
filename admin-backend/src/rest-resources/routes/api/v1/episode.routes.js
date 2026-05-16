import { Router } from 'express'
import { EpisodeController } from '@/src/rest-resources/controllers/episode.controller.js'
import { adminAuthMiddleware } from '@/src/rest-resources/middlewares/admin-auth.middleware.js'

const router = Router()
const episodeController = new EpisodeController()

// All episode routes require admin authentication
router.get('/', adminAuthMiddleware, episodeController.list.bind(episodeController))
router.get('/:id', adminAuthMiddleware, episodeController.getById.bind(episodeController))
router.post('/', adminAuthMiddleware, episodeController.create.bind(episodeController))
router.put('/:id', adminAuthMiddleware, episodeController.update.bind(episodeController))
router.delete('/:id', adminAuthMiddleware, episodeController.delete.bind(episodeController))

export default router
