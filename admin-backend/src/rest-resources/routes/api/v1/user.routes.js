import { Router } from 'express'
import { AdminUserController } from '@/src/rest-resources/controllers/admin-user.controller.js'
import { adminAuthMiddleware } from '@/src/rest-resources/middlewares/admin-auth.middleware.js'

const router = Router()
const adminUserController = new AdminUserController()

// All user management routes require admin authentication
router.get('/', adminAuthMiddleware, adminUserController.list)
router.get('/:id', adminAuthMiddleware, adminUserController.getById)
router.put('/:id/status', adminAuthMiddleware, adminUserController.updateStatus)
router.get('/:id/subscription', adminAuthMiddleware, adminUserController.getUserSubscription)

export default router
