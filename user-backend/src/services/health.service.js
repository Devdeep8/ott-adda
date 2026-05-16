import { BaseService } from '@/src/lib/base.service.js'
import config from '@/src/configs/app.config.js'
import redis from '@/src/lib/redis.js'

export class HealthService extends BaseService {
  async run() {
    let dbStatus = 'disconnected'
    let dbLatency = null
    let dbError = null

    let redisStatus = 'disconnected'
    let redisLatency = null
    let redisError = null

    // Check Database
    try {
      const start = Date.now()
      dbLatency = Date.now() - start
      dbStatus = 'connected'
    } catch (error) {
      this.logger.error('Health check DB failed', {
        errorMessage: error?.message,
        errorCode: error?.code,
      })
      dbError = error?.message || 'Unknown error'
    }

    // Check Redis
    try {
      const start = Date.now()
      await redis.ping()
      redisLatency = Date.now() - start
      redisStatus = 'connected'
    } catch (error) {
      this.logger.error('Health check Redis failed', {
        errorMessage: error?.message,
      })
      redisError = error?.message || 'Unknown error'
    }

    const isHealthy = dbStatus === 'connected' && redisStatus === 'connected'

    return {
      status: isHealthy ? 'ok' : 'error',
      service: config.get('app.name'),
      env: config.get('env'),
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
      checks: {
        database: {
          status: dbStatus,
          latency: dbLatency ? `${dbLatency}ms` : null,
          error: dbError,
        },
        redis: {
          status: redisStatus,
          latency: redisLatency ? `${redisLatency}ms` : null,
          error: redisError,
        },
      },
    }
  }
}

export default HealthService