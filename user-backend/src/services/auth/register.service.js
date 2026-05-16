import bcrypt from 'bcryptjs'
import { BaseService } from '@/src/lib/base.service.js'
import { AppError } from '@/src/errors/app.error.js'
import { Errors } from '@/src/errors/errorCodes.js'
import config from '@/src/configs/app.config.js'
import { generateAccessToken, generateRefreshToken } from '@/src/helpers/auth.helper.js'
import redis from '@/src/lib/redis.js'
import { REDIS_KEYS } from '@/src/constants/redis.constants.js'

export default class RegisterService extends BaseService {
  validate() {
    const { email, password } = this.args
    const errors = []

    if (!email) errors.push({ field: 'email', message: 'Email is required' })
    if (!password || password.length < 8) {
      errors.push({ field: 'password', message: 'Password must be at least 8 characters' })
    }

    if (errors.length > 0) throw AppError.validation(errors, this.traceId)
  }

  async run() {
    const { email, password } = this.args
    const db = this.db

    const hashedPassword = await bcrypt.hash(
      password,
      config.get('bcrypt.saltRounds')
    )

    const { user } = await db.$transaction(async (tx) => {
      const existingEmail = await tx.user.findUnique({
        where: { email: email.toLowerCase() }
      })
      if (existingEmail) {
        throw new AppError(Errors.USER_EMAIL_EXISTS, { traceId: this.traceId })
      }

      const user = await tx.user.create({
        data: {
          email: email.toLowerCase(),
          password: hashedPassword,
          role: 'USER',
          isActive: true,
        },
      })

      return { user }
    })

    // Store session in Redis
    const sessionData = {
      id: user.id,
      email: user.email,
      role: user.role,
      profile: null,
      subscription: null
    }
    await redis.setex(
      REDIS_KEYS.USER_SESSION(user.id),
      15 * 60, // 15 minutes
      JSON.stringify(sessionData)
    )
    await redis.setex(
      REDIS_KEYS.USER_REFRESH_TOKEN(user.id),
      7 * 24 * 60 * 60, // 7 days
      JSON.stringify(sessionData)
    )

    const accessToken = generateAccessToken({ userId: user.id, email: user.email })
    const refreshToken = generateRefreshToken({ userId: user.id, email: user.email })

    const { password: _, ...safeUser } = user
    const safeUserWithSubscription = {
      ...safeUser,
      subscription: null
    }

    return {
      user: safeUserWithSubscription,
      accessToken,
      refreshToken,
    }
  }
}
