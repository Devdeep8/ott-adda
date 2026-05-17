import express from 'express'
import authRoutes from "./auth.routes"
import seriesRoutes from "./series.routes"
import episodeRoutes from "./episode.routes"
import categoryRoutes from "./category.routes"
import subscriptionRoutes from "./subscription.routes"
import watchListRoutes from "./watch-list.routes"
import watchHistoryRoutes from "./watch-history.routes"
import uploadRoutes from "./upload.routes"
import streamRoutes from "./stream.routes"

const v1Router = express.Router()

// Auth routes
v1Router.use('/auth', authRoutes)

// Content routes (public + optional auth)
v1Router.use('/series', seriesRoutes)
v1Router.use('/episodes', episodeRoutes)
v1Router.use('/categories', categoryRoutes)

// Subscription routes
v1Router.use('/subscription', subscriptionRoutes)

// User activity routes (protected)
v1Router.use('/watch-list', watchListRoutes)
v1Router.use('/watch-history', watchHistoryRoutes)

// Upload routes (protected - admin only)
v1Router.use('/upload', uploadRoutes)

// Stream routes (protected)
v1Router.use('/stream', streamRoutes)

export default v1Router