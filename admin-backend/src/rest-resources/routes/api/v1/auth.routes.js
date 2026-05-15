import { Router } from 'express'
import { AdminController } from '@/src/rest-resources/controllers/admin.controller.js'
import { adminAuthMiddleware } from '@/src/rest-resources/middlewares/admin-auth.middleware.js'

const router = Router()
const adminController = new AdminController()

router.post('/login', adminController.login)
router.post('/register', adminController.register)
router.post('/logout', adminAuthMiddleware, adminController.logout)
router.get('/me', adminAuthMiddleware, adminController.getMe)

export default router
