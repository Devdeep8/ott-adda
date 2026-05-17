import express from 'express'
import {WatchHistoryController} from '@/src/rest-resources/controllers/watch-history.controller.js'
import { authMiddleware } from '@/src/rest-resources/middlewares/auth.middleware.js'

const router = express.Router()

router.post('/', authMiddleware(), WatchHistoryController.update)
router.get('/continue-watching', authMiddleware(), WatchHistoryController.list)
// router.get('/', authMiddleware(), WatchHistoryController.getHistory)
// router.delete('/:episodeId', authMiddleware(), WatchHistoryController.deleteFromHistory)

export default router