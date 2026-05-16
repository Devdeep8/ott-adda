import { Router } from 'express'
import AdminPanelController from '@/src/rest-resources/controllers/admin-panel.controller.js'
import { adminAuthMiddleware } from '@/src/rest-resources/middlewares/admin-auth.middleware.js'

const adminRoutes = Router()

adminRoutes.get('/dashboard', adminAuthMiddleware, AdminPanelController.getDashboard.bind(AdminPanelController))
adminRoutes.get('/users', adminAuthMiddleware, AdminPanelController.getAllUsers.bind(AdminPanelController))
adminRoutes.put('/users/:id/role', adminAuthMiddleware, AdminPanelController.updateUserRole.bind(AdminPanelController))

export default adminRoutes
