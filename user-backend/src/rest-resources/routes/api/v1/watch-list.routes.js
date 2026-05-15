import { Router } from 'express'
import { contextMiddleware } from '@/src/rest-resources/middlewares/context.middleware.js'
import { authMiddleware } from '@/src/rest-resources/middlewares/auth.middleware.js'
import { WatchListController } from '@/src/rest-resources/controllers/watch-list.controller.js'

const router = Router()
const watchListController = new WatchListController()

// All routes require authentication
router.use(contextMiddleware(), authMiddleware())

router.get('/', watchListController.list)
router.post('/', watchListController.add)
router.delete('/:seriesId', watchListController.remove)
router.get('/check/:seriesId', watchListController.check)

export default router