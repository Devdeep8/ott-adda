import express from 'express'
import StreamController from '../../../../rest-resources/controllers/stream.controller.js'
import { authMiddleware } from '../../../../rest-resources/middlewares/auth.middleware.js'
import { requireSubscription } from '../../../../rest-resources/middlewares/subscription.middleware.js'

const router = express.Router()

router.get('/:episodeId/manifest', authMiddleware, requireSubscription, StreamController.getManifestUrl)
router.get('/:episodeId/:filename', authMiddleware, requireSubscription, StreamController.serveHLSFile)

export default router