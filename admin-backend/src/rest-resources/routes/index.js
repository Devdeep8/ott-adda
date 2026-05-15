import apiRoutes from './api/index.js'

const router = (await import('express')).Router()

// API routes
router.use('/api', apiRoutes)

export default router
