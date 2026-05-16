import express from 'express'
import StreamController from '@/src/rest-resources/controllers/stream.controller.js'
import { authMiddleware } from '@/src/rest-resources/middlewares/auth.middleware.js'
import { requireSubscription } from '@/src/rest-resources/middlewares/subscription.middleware.js'

const router = express.Router()

router.get('/:episodeId/manifest', authMiddleware, requireSubscription, StreamController.getManifestUrl)
router.get('/:episodeId/:filename', authMiddleware, requireSubscription, StreamController.serveHLSFile)

export default router
