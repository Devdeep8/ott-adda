import { Router } from 'express'
import { contextMiddleware } from '../../../../rest-resources/middlewares/context.middleware.js'
import TrackingController from '../../../../rest-resources/controllers/tracking.controller.js'

const trackingRoutes = Router()

trackingRoutes.use(contextMiddleware())

// No auth middleware - public routes
trackingRoutes.get('/invoice/view/:publicId', TrackingController.trackInvoiceView)

export default trackingRoutes
