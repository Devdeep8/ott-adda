import express from 'express'
import authRoutes from "./auth.routes"
import seriesRoutes from "./series.routes"
import categoryRoutes from "./category.routes"
import subscriptionRoutes from "./subscription.routes"
import watchListRoutes from "./watch-list.routes"
import watchHistoryRoutes from "./watch-history.routes"

const v1Router = express.Router()

// Auth routes
v1Router.use('/auth', authRoutes)

// Content routes (public + optional auth)
v1Router.use('/series', seriesRoutes)
v1Router.use('/categories', categoryRoutes)

// Subscription routes
v1Router.use('/subscription', subscriptionRoutes)

// User activity routes (protected)
v1Router.use('/watch-list', watchListRoutes)
v1Router.use('/watch-history', watchHistoryRoutes)

export default v1Router