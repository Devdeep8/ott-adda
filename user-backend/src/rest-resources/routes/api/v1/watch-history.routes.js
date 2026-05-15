import { Router } from 'express'
import { contextMiddleware } from '@/src/rest-resources/middlewares/context.middleware.js'
import { authMiddleware } from '@/src/rest-resources/middlewares/auth.middleware.js'
import { WatchHistoryController } from '@/src/rest-resources/controllers/watch-history.controller.js'

const router = Router()
const watchHistoryController = new WatchHistoryController()

// All routes require authentication
router.use(contextMiddleware(), authMiddleware())

router.get('/', watchHistoryController.list)
router.post('/', watchHistoryController.record)
router.patch('/:historyId', watchHistoryController.update)

export default router