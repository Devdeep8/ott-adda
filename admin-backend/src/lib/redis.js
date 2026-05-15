import Redis from 'ioredis'
import config from '@/src/configs/app.config.js'

const redis = new Redis({
  host: config.get('redis.host'),
  port: config.get('redis.port'),
  password: config.get('redis.password') || undefined, 
  maxRetriesPerRequest: 3
})

redis.on('connect', () => console.log('✅ Admin Redis connected'))
redis.on('error', (err) => console.error('❌ Admin Redis Error:', err.message))

export default redis
