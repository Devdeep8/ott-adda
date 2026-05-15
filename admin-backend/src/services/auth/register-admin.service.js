import { BaseService } from '@/src/lib/base.service.js'
import { AppError } from '@/src/errors/app.error.js'
import { Errors } from '@/src/errors/errorCodes.js'
import bcrypt from 'bcryptjs'
import config from '@/src/configs/app.config.js'

export class RegisterAdminService extends BaseService {
  validate() {
    const { email, password, firstName } = this.args
    if (!email || !password || !firstName) {
      throw new AppError(Errors.VALIDATION_ERROR, {
        traceId: this.traceId,
        details: [{ field: 'required', message: 'Email, password, and firstName are required' }]
      })
    }
  }

  async run() {
    const { email, password, firstName, lastName } = this.args

    // Check if admin already exists
    const existingAdmin = await this.db.admin.findUnique({ where: { email } })
    if (existingAdmin) {
      throw new AppError(Errors.ADMIN_EMAIL_EXISTS, { traceId: this.traceId })
    }

    // Hash password
    const saltRounds = config.get('bcrypt.saltRounds')
    const hashedPassword = await bcrypt.hash(password, saltRounds)

    // Create admin
    const admin = await this.db.admin.create({
      data: {
        email,
        password: hashedPassword,
        firstName,
        lastName: lastName || '',
        role: 'ADMIN',
        isActive: true
      }
    })

    return {
      admin: {
        id: admin.id,
        email: admin.email,
        role: admin.role,
        firstName: admin.firstName,
        lastName: admin.lastName
      }
    }
  }
}
