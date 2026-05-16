import express from 'express'
import apiRouter from './api'
import seriesRouter from './api/v1/series.routes.js'
import episodeRouter from './episode.routes.js'
import uploadRouter from './upload.routes.js'
import streamRouter from './stream.routes.js'
import subscriptionRouter from './subscription.routes.js'
import watchHistoryRouter from './watch-history.routes.js'


const router = express.Router()

router.use('/api/v1/series', seriesRouter)
router.use('/api/v1/episodes', episodeRouter)
router.use('/api/v1/upload', uploadRouter)
router.use('/api/v1/stream', streamRouter)
router.use('/api/v1/subscriptions', subscriptionRouter)
router.use('/api/v1/history', watchHistoryRouter)
router.use('/api', apiRouter)


export default router