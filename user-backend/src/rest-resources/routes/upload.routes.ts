import express from 'express'
import UploadController from '@/src/rest-resources/controllers/upload.controller.js'
import { uploadVideo, handleMulterError } from '@/src/rest-resources/middlewares/upload.middleware.js'
import { authMiddleware } from '@/src/rest-resources/middlewares/auth.middleware.js'
import { requireAdmin } from '@/src/rest-resources/middlewares/subscription.middleware.js'

const router = express.Router()

router.post('/episodes/:episodeId', authMiddleware, requireAdmin, uploadVideo.single('video'), handleMulterError, UploadController.uploadEpisodeVideo)

export default router
