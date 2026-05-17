import prisma from '../../lib/prisma.js'
import { AppError } from '../../errors/app.error.js'
import { Errors } from '../../errors/errorCodes.js'

// Middleware to require an active subscription for protected content (non-free episodes)
export const requireSubscription = () => {
  return async (req, res, next) => {
    try {
      const episodeId = req.params?.episodeId || req.params?.id

      if (!episodeId) {
        throw new AppError(Errors.BAD_REQUEST, { traceId: req.context?.traceId })
      }

      const episode = await prisma.episode.findUnique({
        where: { id: episodeId },
        select: { id: true, isFree: true, seriesId: true }
      })

      if (!episode) {
        throw new AppError(Errors.EPISODE_NOT_FOUND, { traceId: req.context?.traceId })
      }

      // Free episode -> allow
      if (episode.isFree) return next()

      // If not free -> check user's active subscription
      const userId = req.context?.user?.id
      if (!userId) {
        throw new AppError(Errors.UNAUTHORIZED, { traceId: req.context?.traceId })
      }

      const subscription = await prisma.userSubscription.findFirst({
        where: {
          userId,
          status: 'ACTIVE',
          endDate: { gt: new Date() }
        }
      })

      if (!subscription) {
        throw new AppError(Errors.SUBSCRIPTION_EXPIRED, { traceId: req.context?.traceId })
      }

      // OK
      return next()
    } catch (error) {
      next(error)
    }
  }
}

// Middleware to require admin role
export const requireAdmin = () => {
  return async (req, res, next) => {
    try {
      const user = req.context?.user
      if (!user || user.role !== 'ADMIN') {
        throw new AppError(Errors.FORBIDDEN, { traceId: req.context?.traceId })
      }
      return next()
    } catch (error) {
      next(error)
    }
  }
}
