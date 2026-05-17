import { sendResponse } from "../../helpers/response.helpers"
import RegisterService from "../../services/auth/register.service"
import LoginService from "../../services/auth/login.service"
import { setAuthCookies } from '../../helpers/cookie.helper.js'
import redis from '../../lib/redis.js'
import { REDIS_KEYS } from '../../constants/redis.constants.js'
import prisma from '../../lib/prisma.js'

const SEVEN_DAYS_IN_SECONDS = 7 * 24 * 60 * 60

export default class UserController {
  static async register(req, res, next) {
    try {
      const result = await RegisterService.execute(req.body, req.context)
      
      // ✅ Save Refresh Token and User Session to Redis
      await redis.set(REDIS_KEYS.USER_REFRESH_TOKEN(result.user.id), result.refreshToken, 'EX', SEVEN_DAYS_IN_SECONDS)
      await redis.set(REDIS_KEYS.USER_SESSION(result.user.id), JSON.stringify(result.user), 'EX', SEVEN_DAYS_IN_SECONDS)
      
      setAuthCookies(res, { accessToken: result.accessToken, refreshToken: result.refreshToken })
      // Response should not reference onboarding; frontend can use user.business or user.subscription if needed
      sendResponse({ req, res, next }, result, 'Registration successful')
    } catch (error) { next(error) }
  }

  static async login(req, res, next) {
    try {
      const result = await LoginService.execute(req.body, req.context)
      
      // ✅ Save Refresh Token and User Session to Redis
      await redis.set(REDIS_KEYS.USER_REFRESH_TOKEN(result.user.id), result.refreshToken, 'EX', SEVEN_DAYS_IN_SECONDS)
      await redis.set(REDIS_KEYS.USER_SESSION(result.user.id), JSON.stringify(result.user), 'EX', SEVEN_DAYS_IN_SECONDS)
      
      setAuthCookies(res, { accessToken: result.accessToken, refreshToken: result.refreshToken })
      // Response should not reference onboarding; frontend can use user.business or user.subscription if needed
      sendResponse({ req, res, next }, result, 'Login successful')
    } catch (error) { next(error) }
  }

  static async getMe(req, res, next) {
    try {
      // Fetch user with business and subscription (include plan)
      const user = await prisma.user.findUnique({
        where: { id: req.context.user.id },
        include: {
          subscription: {
            include: {
              plan: {
                select: { id: true, name: true, slug: true, priceInPaise: true, features: true }
              }
            }
          }
        }
      });

      // Normalize subscription to a simpler shape used by other endpoints
      const subscription = user?.subscription
        ? {
            planId: user.subscription.plan?.id || null,
            planName: user.subscription.plan?.name || null,
            planSlug: user.subscription.plan?.slug || null,
            status: user.subscription.status,
            startDate: user.subscription.startDate,
            endDate: user.subscription.endDate
          }
        : null

      // Remove the nested subscription object to avoid redundancy
      const { subscription: _sub, ...userWithoutNestedSubscription } = user || {}

      sendResponse({ req, res, next }, { user: { ...userWithoutNestedSubscription, subscription } }, 'Profile fetched')
    } catch (error) { next(error) }
  }

  static async logout(req, res, next) {
    try {
      const userId = req.context?.user?.id
      if (userId) {
        await redis.del(REDIS_KEYS.USER_SESSION(userId))
        await redis.del(REDIS_KEYS.USER_REFRESH_TOKEN(userId))
      }

      // Clear cookies
      res.clearCookie('accessToken', { path: '/' })
      res.clearCookie('refreshToken', { path: '/' })

      // Return a neutral response (frontend can redirect to /home)
      sendResponse({ req, res, next }, { redirect: '/home' }, 'Logout successful')
    } catch (error) {
      next(error)
    }
  }
}
