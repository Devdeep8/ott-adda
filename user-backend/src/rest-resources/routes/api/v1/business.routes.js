import express from 'express'
import { contextMiddleware } from '../../../../rest-resources/middlewares/context.middleware.js'
import { authMiddleware } from '../../../../rest-resources/middlewares/auth.middleware.js'
import BusinessController from '../../../../rest-resources/controllers/business.controller'

const businessRoutes = express.Router()

// Protected Routes (Need context + auth verification)
businessRoutes.route('/').post(contextMiddleware(), authMiddleware(), BusinessController.createBusiness)

export default businessRoutes
