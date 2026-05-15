import authRoutes from './auth.routes.js'
import seriesRoutes from './series.routes.js'
import episodeRoutes from './episode.routes.js'
import categoryRoutes from './category.routes.js'
import subscriptionRoutes from './subscription.routes.js'
import userRoutes from './user.routes.js'

const router = (await import('express')).Router()

// Admin authentication routes
router.use('/auth', authRoutes)

// Admin content management routes
router.use('/series', seriesRoutes)
router.use('/episodes', episodeRoutes)
router.use('/categories', categoryRoutes)

// Admin subscription management routes
router.use('/subscriptions', subscriptionRoutes)

// Admin user management routes
router.use('/users', userRoutes)

export default router
