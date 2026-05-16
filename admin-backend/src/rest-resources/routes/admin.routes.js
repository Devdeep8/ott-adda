import { Router } from 'express'
import AdminPanelController from '@/src/rest-resources/controllers/admin-panel.controller.js'
import { adminAuthMiddleware } from '@/src/rest-resources/middlewares/admin-auth.middleware.js'

const router = Router()

router.get('/dashboard', adminAuthMiddleware, AdminPanelController.getDashboard.bind(AdminPanelController))
router.get('/users', adminAuthMiddleware, AdminPanelController.getAllUsers.bind(AdminPanelController))
router.put('/users/:id/role', adminAuthMiddleware, AdminPanelController.updateUserRole.bind(AdminPanelController))

export default router
