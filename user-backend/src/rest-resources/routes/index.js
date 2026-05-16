import express from 'express'
import apiRouter from './api'
import seriesRouter from './api/v1/series.routes.js'
import episodeRouter from './episode.routes.js'


const router = express.Router()

router.use('/api/v1/series', seriesRouter)
router.use('/api/v1/episodes', episodeRouter)
router.use('/api', apiRouter)


export default router