import express from 'express'
import UploadController from '../../../../rest-resources/controllers/upload.controller.js'
import { uploadVideo, handleMulterError } from '../../../../rest-resources/middlewares/upload.middleware.js'
import { authMiddleware } from '../../../../rest-resources/middlewares/auth.middleware.js'
import { requireAdmin } from '../../../../rest-resources/middlewares/subscription.middleware.js'

const router = express.Router()

router.post('/episodes/:episodeId', authMiddleware, requireAdmin, uploadVideo.single('video'), handleMulterError, UploadController.uploadEpisodeVideo)

export default router