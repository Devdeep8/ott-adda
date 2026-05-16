import { BaseController } from '@/src/lib/base.controller.js'
import { sendResponse } from '@/src/helpers/response.helpers.js'
import { GetDashboardService } from '@/src/services/admin/get-dashboard.service.js'
import { GetUsersService } from '@/src/services/admin/get-users.service.js'
import { UpdateUserRoleService } from '@/src/services/admin/update-user-role.service.js'

export class AdminPanelController extends BaseController {
  async getDashboard(req, res, next) {
    try {
      const result = await GetDashboardService.execute({}, req.context)
      return sendResponse(req, res, result, 'Dashboard fetched')
    } catch (error) {
      next(error)
    }
  }

  async getAllUsers(req, res, next) {
    try {
      const service = new GetUsersService(req.query, req.context)
      const result = await service.run()
      return sendResponse(req, res, result, 'Users fetched')
    } catch (error) {
      next(error)
    }
  }

  async updateUserRole(req, res, next) {
    try {
      const { id: userId } = req.params
      const { role } = req.body

      const service = new UpdateUserRoleService({ userId, role }, req.context)
      const result = await service.run()
      return sendResponse(req, res, result, 'User role updated')
    } catch (error) {
      next(error)
    }
  }
}

export default new AdminPanelController()
