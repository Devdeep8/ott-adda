import { AppError } from '@/src/errors/app.error.js'
import { Errors } from '@/src/errors/errorCodes.js'
import { verifyAdminToken } from '@/src/helpers/auth.helper.js'
import redis from '@/src/lib/redis.js'
import { REDIS_KEYS } from '@/src/constants/redis.constants.js'

export async function adminAuthMiddleware(req, res, next) {
  try {
    const token = req.cookies?.adminToken || req.headers?.authorization?.replace('Bearer ', '')

    if (!token) {
      throw new AppError(Errors.UNAUTHORIZED, { traceId: req.context?.traceId })
    }

    // Verify token
    const decoded = verifyAdminToken(token)

    if (!decoded || !decoded.adminId) {
      throw new AppError(Errors.AUTH_TOKEN_INVALID, { traceId: req.context?.traceId })
    }

    // Get admin session from Redis
    const sessionData = await redis.get(REDIS_KEYS.ADMIN_SESSION(decoded.adminId))

    if (!sessionData) {
      throw new AppError(Errors.AUTH_TOKEN_EXPIRED, { traceId: req.context?.traceId })
    }

    const admin = JSON.parse(sessionData)

    // Add admin to context
    req.context.userId = admin.id
    req.context.user = admin

    next()
  } catch (error) {
    if (error instanceof AppError) {
      return next(error)
    }
    next(new AppError(Errors.AUTH_TOKEN_INVALID, { traceId: req.context?.traceId }))
  }
}

export async function optionalAdminAuth(req, res, next) {
  try {
    const token = req.cookies?.adminToken || req.headers?.authorization?.replace('Bearer ', '')

    if (token) {
      const decoded = verifyAdminToken(token)

      if (decoded && decoded.adminId) {
        const sessionData = await redis.get(REDIS_KEYS.ADMIN_SESSION(decoded.adminId))

        if (sessionData) {
          const admin = JSON.parse(sessionData)
          req.context.adminId = admin.id
          req.context.admin = admin
        }
      }
    }
  } catch (error) {
    // Continue without auth on error
  }

  next()
}
