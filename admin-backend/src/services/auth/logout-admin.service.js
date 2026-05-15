import { BaseService } from '@/src/lib/base.service.js'
import redis from '@/src/lib/redis.js'
import { REDIS_KEYS } from '@/src/constants/redis.constants.js'

export class LogoutAdminService extends BaseService {
  async run() {
    const { adminId } = this.context

    if (adminId) {
      // Clear admin session from Redis
      await redis.del(REDIS_KEYS.ADMIN_SESSION(adminId))
    }

    return { success: true }
  }
}
