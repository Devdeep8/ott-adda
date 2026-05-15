import { BaseService } from '@/src/lib/base.service.js'
import { AppError } from '@/src/errors/app.error.js'
import { Errors } from '@/src/errors/errorCodes.js'
import bcrypt from 'bcryptjs'
import { generateAdminToken } from '@/src/helpers/auth.helper.js'
import { setAdminAuthCookies } from '@/src/helpers/cookie.helper.js'
import redis from '@/src/lib/redis.js'
import { REDIS_KEYS } from '@/src/constants/redis.constants.js'

export class LoginAdminService extends BaseService {
  validate() {
    const { email, password } = this.args
    if (!email || !password) {
      throw new AppError(Errors.VALIDATION_ERROR, {
        traceId: this.traceId,
        details: [{ field: 'credentials', message: 'Email and password are required' }]
      })
    }
  }

  async run() {
    const { email, password } = this.args
    const { res } = this.context

    // Find admin by email
    const admin = await this.db.admin.findUnique({
      where: { email }
    })

    if (!admin || !admin.isActive) {
      throw new AppError(Errors.AUTH_INVALID_CREDENTIALS, { traceId: this.traceId })
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, admin.password)
    if (!isPasswordValid) {
      throw new AppError(Errors.AUTH_INVALID_CREDENTIALS, { traceId: this.traceId })
    }

    // Generate admin token
    const adminToken = generateAdminToken({ adminId: admin.id, role: admin.role })

    // Store session in Redis
    const sessionData = {
      id: admin.id,
      email: admin.email,
      role: admin.role,
      firstName: admin.firstName,
      lastName: admin.lastName
    }
    await redis.setex(
      REDIS_KEYS.ADMIN_SESSION(admin.id),
      24 * 60 * 60, // 24 hours
      JSON.stringify(sessionData)
    )

    // Set cookies
    setAdminAuthCookies(res, { adminToken, refreshToken: adminToken })

    // Update last login
    await this.db.admin.update({
      where: { id: admin.id },
      data: { lastLoginAt: new Date() }
    })

    return {
      admin: {
        id: admin.id,
        email: admin.email,
        role: admin.role,
        firstName: admin.firstName,
        lastName: admin.lastName
      },
      adminToken
    }
  }
}
