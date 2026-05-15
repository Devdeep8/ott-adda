import { BaseController } from '@/src/lib/base.controller.js'
import { LoginAdminService } from '@/src/services/auth/login-admin.service.js'
import { RegisterAdminService } from '@/src/services/auth/register-admin.service.js'
import { LogoutAdminService } from '@/src/services/auth/logout-admin.service.js'
import { GetAdminService } from '@/src/services/auth/get-admin.service.js'
import { sendResponse } from '@/src/helpers/response.helpers.js'

export class AdminController extends BaseController {
  async login(req, res, next) {
    try {
      const result = await LoginAdminService.execute(req.body, req.context)
      return sendResponse(req, res, result, 'Login successful')
    } catch (error) {
      return next(error)
    }
  }

  async register(req, res, next) {
    try {
      const result = await RegisterAdminService.execute(req.body, req.context)
      return sendResponse(req, res, result, 'Admin registered successfully')
    } catch (error) {
      return next(error)
    }
  }

  async logout(req, res, next) {
    try {
      await LogoutAdminService.execute({}, req.context)
      return sendResponse(req, res, {}, 'Logout successful')
    } catch (error) {
      return next(error)
    }
  }

  async getMe(req, res, next) {
    try {
      const result = await GetAdminService.execute({}, req.context)
      return sendResponse(req, res, result, 'Admin profile fetched')
    } catch (error) {
      return next(error)
    }
  }
}
