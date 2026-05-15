import { Router } from 'express'
import { SeriesController } from '@/src/rest-resources/controllers/series.controller.js'

const router = Router()
const seriesController = new SeriesController()

// Public routes (no auth required for browsing)
router.get('/', seriesController.list)
router.get('/:slug', seriesController.getBySlug)
router.get('/:slug/episodes', seriesController.getEpisodes)

export default router