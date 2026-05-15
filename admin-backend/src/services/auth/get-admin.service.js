import { BaseService } from '@/src/lib/base.service.js'
import { AppError } from '@/src/errors/app.error.js'
import { Errors } from '@/src/errors/errorCodes.js'

export class GetAdminService extends BaseService {
  async run() {
    const { userId } = this.context

    if (!userId) {
      throw new AppError(Errors.UNAUTHORIZED, { traceId: this.traceId })
    }

    const admin = await this.db.admin.findUnique({
      where: { id: userId }
    })

    if (!admin || !admin.isActive) {
      throw new AppError(Errors.ADMIN_NOT_FOUND, { traceId: this.traceId })
    }

    return {
      admin: {
        id: admin.id,
        email: admin.email,
        role: admin.role,
        isActive: admin.isActive,
        firstName: admin.firstName,
        lastName: admin.lastName
      }
    }
  }
}
