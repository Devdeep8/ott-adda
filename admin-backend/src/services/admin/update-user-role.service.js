import { BaseService } from '@/src/lib/base.service.js'
import { AppError } from '@/src/errors/app.error.js'
import { Errors } from '@/src/errors/errorCodes.js'

export class UpdateUserRoleService extends BaseService {
  validate() {
    const { userId, role } = this.args

    if (!['USER', 'ADMIN'].includes(role)) {
      throw new AppError(Errors.VALIDATION_ERROR, {
        traceId: this.traceId,
        message: 'Invalid role. Must be USER or ADMIN'
      })
    }

    if (!userId) {
      throw new AppError(Errors.VALIDATION_ERROR, {
        traceId: this.traceId,
        message: 'User ID is required'
      })
    }
  }

  async run() {
    const { userId, role } = this.args

    const user = await this.db.user.update({
      where: { id: userId },
      data: { role }
    })

    return user
  }
}