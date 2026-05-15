export const Errors = {
  // Generic
  INTERNAL_ERROR: {
    code: 'INTERNAL_ERROR',
    httpStatus: 500,
    message: 'Internal server error',
    isCritical: true,
  },
  NOT_FOUND: {
    code: 'NOT_FOUND',
    httpStatus: 404,
    message: 'Resource not found',
  },
  VALIDATION_ERROR: {
    code: 'VALIDATION_ERROR',
    httpStatus: 400,
    message: 'Validation failed',
  },
  UNAUTHORIZED: {
    code: 'UNAUTHORIZED',
    httpStatus: 401,
    message: 'Authentication required',
  },
  FORBIDDEN: {
    code: 'FORBIDDEN',
    httpStatus: 403,
    message: 'Access denied',
  },
  CONFLICT: {
    code: 'CONFLICT',
    httpStatus: 409,
    message: 'Resource conflict',
  },
  BAD_REQUEST: {
    code: 'BAD_REQUEST',
    httpStatus: 400,
    message: 'Bad request',
  },

  // Auth
  AUTH_INVALID_CREDENTIALS: {
    code: 'AUTH_INVALID_CREDENTIALS',
    httpStatus: 401,
    message: 'Invalid email or password',
  },
  AUTH_TOKEN_EXPIRED: {
    code: 'AUTH_TOKEN_EXPIRED',
    httpStatus: 401,
    message: 'Token expired',
  },
  AUTH_TOKEN_INVALID: {
    code: 'AUTH_TOKEN_INVALID',
    httpStatus: 401,
    message: 'Invalid token',
  },
  AUTH_UNAUTHORIZED: {
    code: 'AUTH_UNAUTHORIZED',
    httpStatus: 401,
    message: 'Unauthorized',
  },

  // User
  USER_NOT_FOUND: {
    code: 'USER_NOT_FOUND',
    httpStatus: 404,
    message: 'User not found',
  },
  USER_EMAIL_EXISTS: {
    code: 'USER_EMAIL_EXISTS',
    httpStatus: 409,
    message: 'Email already registered',
  },
  USER_PHONE_EXISTS: {
    code: 'USER_PHONE_EXISTS',
    httpStatus: 409,
    message: 'Phone number already registered',
  },
  USER_ACCOUNT_LOCKED: {
    code: 'USER_ACCOUNT_LOCKED',
    httpStatus: 403,
    message: 'Account is locked',
  },

  // Series
  SERIES_NOT_FOUND: {
    code: 'SERIES_NOT_FOUND',
    httpStatus: 404,
    message: 'Series not found',
  },
  SERIES_SLUG_EXISTS: {
    code: 'SERIES_SLUG_EXISTS',
    httpStatus: 409,
    message: 'Series with this slug already exists',
  },
  SERIES_HAS_EPISODES: {
    code: 'SERIES_HAS_EPISODES',
    httpStatus: 400,
    message: 'Cannot delete series with existing episodes',
  },

  // Episode
  EPISODE_NOT_FOUND: {
    code: 'EPISODE_NOT_FOUND',
    httpStatus: 404,
    message: 'Episode not found',
  },
  EPISODE_NUMBER_EXISTS: {
    code: 'EPISODE_NUMBER_EXISTS',
    httpStatus: 409,
    message: 'Episode number already exists in this series',
  },

  // Category
  CATEGORY_NOT_FOUND: {
    code: 'CATEGORY_NOT_FOUND',
    httpStatus: 404,
    message: 'Category not found',
  },
  CATEGORY_SLUG_EXISTS: {
    code: 'CATEGORY_SLUG_EXISTS',
    httpStatus: 409,
    message: 'Category with this slug already exists',
  },
  CATEGORY_HAS_SERIES: {
    code: 'CATEGORY_HAS_SERIES',
    httpStatus: 400,
    message: 'Cannot delete category with series',
  },

  // Subscription
  SUBSCRIPTION_PLAN_NOT_FOUND: {
    code: 'SUBSCRIPTION_PLAN_NOT_FOUND',
    httpStatus: 404,
    message: 'Subscription plan not found',
  },
  SUBSCRIPTION_PLAN_HAS_ACTIVE: {
    code: 'SUBSCRIPTION_PLAN_HAS_ACTIVE',
    httpStatus: 400,
    message: 'Cannot delete plan with active subscriptions',
  },
  SUBSCRIPTION_NOT_FOUND: {
    code: 'SUBSCRIPTION_NOT_FOUND',
    httpStatus: 404,
    message: 'Subscription not found',
  },
  SUBSCRIPTION_EXPIRED: {
    code: 'SUBSCRIPTION_EXPIRED',
    httpStatus: 403,
    message: 'Your subscription has expired',
  },

  // Watch List
  WATCH_LIST_ITEM_EXISTS: {
    code: 'WATCH_LIST_ITEM_EXISTS',
    httpStatus: 409,
    message: 'Item already in watch list',
  },
  WATCH_LIST_ITEM_NOT_FOUND: {
    code: 'WATCH_LIST_ITEM_NOT_FOUND',
    httpStatus: 404,
    message: 'Item not found in watch list',
  },
}