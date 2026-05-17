import bcrypt from 'bcryptjs'
import { BaseService } from '../../lib/base.service.js'
import { AppError } from '../../errors/app.error.js'
import { Errors } from '../../errors/errorCodes.js'
import { generateAccessToken, generateRefreshToken } from '../../helpers/auth.helper.js'
import redis from '../../lib/redis.js'
import { REDIS_KEYS } from '../../constants/redis.constants.js'

export default class LoginService extends BaseService {
  validate() {
    const { email, password } = this.args
    const errors = []

    if (!email) errors.push({ field: 'email', message: 'Email is required' })
    if (!password) errors.push({ field: 'password', message: 'Password is required' })

    if (errors.length > 0) throw AppError.validation(errors, this.traceId)
  }

  async run() {
    const { email, password } = this.args
    const db = this.db

    // 1. Find user
    const user = await db.user.findUnique({
      where: { email: email },
      include: { profile: true }
    })

    if (!user) {
      throw new AppError(Errors.AUTH_INVALID_CREDENTIALS, { traceId: this.traceId })
    }

    // 2. Check account is active
    if (!user.isActive) {
      throw new AppError(Errors.USER_ACCOUNT_LOCKED, { traceId: this.traceId })
    }

    // 3. Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      throw new AppError(Errors.AUTH_INVALID_CREDENTIALS, { traceId: this.traceId })
    }

    // 4. Generate tokens
    const payload = { userId: user.id, email: user.email }
    const accessToken = generateAccessToken(payload)
    const refreshToken = generateRefreshToken(payload)

    // 5. Fetch active subscription (if any)
    const subscription = await db.userSubscription.findFirst({
      where: {
        userId: user.id,
        status: 'ACTIVE',
        endDate: { gt: new Date() }
      },
      include: {
        plan: {
          select: { id: true, name: true, slug: true, priceInPaise: true, features: true }
        }
      }
    })

    const subscriptionData = subscription
      ? {
          planId: subscription.plan?.id || null,
          planName: subscription.plan?.name || null,
          planSlug: subscription.plan?.slug || null,
          status: subscription.status,
          startDate: subscription.startDate,
          endDate: subscription.endDate
        }
      : null

    // 6. Store session in Redis
    const sessionData = {
      id: user.id,
      email: user.email,
      role: user.role,
      profile: user.profile,
      subscription: subscriptionData
    }
    await redis.setex(
      REDIS_KEYS.USER_SESSION(user.id),
      15 * 60, // 15 minutes (access token expiry)
      JSON.stringify(sessionData)
    )
    await redis.setex(
      REDIS_KEYS.USER_REFRESH_TOKEN(user.id),
      7 * 24 * 60 * 60, // 7 days (refresh token expiry)
      JSON.stringify(sessionData)
    )

    // 7. Update last login
    await db.user.update({
      where: { id: user.id },
      data: { lastLoginAt: new Date() }
    })

    // 8. Safe response
    const { password: _, ...safeUser } = user
    const safeUserWithSubscription = {
      ...safeUser,
      subscription: subscriptionData
    }

    return {
      user: safeUserWithSubscription,
      accessToken,
      refreshToken,
      subscription: subscriptionData
    }
  }
}
