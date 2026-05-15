export const REDIS_KEYS = {
  ADMIN_SESSION: (adminId) => `admin:session:${adminId}`,
  ADMIN_REFRESH_TOKEN: (adminId) => `admin:refresh:${adminId}`,
  USER_SESSION: (userId) => `auth:session:${userId}`,
  USER_REFRESH_TOKEN: (userId) => `auth:refresh:${userId}`
}
