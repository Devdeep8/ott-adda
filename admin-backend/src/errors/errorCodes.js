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

  // Admin Auth
  AUTH_INVALID_CREDENTIALS: {
    code: 'AUTH_INVALID_CREDENTIALS',
    httpStatus: 401,
    message: 'Invalid email or password',
  },
  AUTH_TOKEN_EXPIRED: {
    code: 'AUTH_TOKEN_EXPIRED',
    httpStatus: 401,
    message: 'Admin token expired',
  },
  AUTH_TOKEN_INVALID: {
    code: 'AUTH_TOKEN_INVALID',
    httpStatus: 401,
    message: 'Invalid admin token',
  },
  AUTH_UNAUTHORIZED: {
    code: 'AUTH_UNAUTHORIZED',
    httpStatus: 401,
    message: 'Unauthorized',
  },

  // Admin
  ADMIN_NOT_FOUND: {
    code: 'ADMIN_NOT_FOUND',
    httpStatus: 404,
    message: 'Admin not found',
  },
  ADMIN_EMAIL_EXISTS: {
    code: 'ADMIN_EMAIL_EXISTS',
    httpStatus: 409,
    message: 'Admin email already registered',
  },
  ADMIN_ACCOUNT_LOCKED: {
    code: 'ADMIN_ACCOUNT_LOCKED',
    httpStatus: 403,
    message: 'Admin account is locked',
  },

  // Series
  SERIES_NOT_FOUND: {
    code: 'SERIES_NOT_FOUND',
    httpStatus: 404,
    message: 'Series not found',
  },
  SERIES_ALREADY_EXISTS: {
    code: 'SERIES_ALREADY_EXISTS',
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
  CATEGORY_ALREADY_EXISTS: {
    code: 'CATEGORY_ALREADY_EXISTS',
    httpStatus: 409,
    message: 'Category with this slug already exists',
  },
  CATEGORY_HAS_SERIES: {
    code: 'CATEGORY_HAS_SERIES',
    httpStatus: 400,
    message: 'Cannot delete category with series',
  },

  // Subscription Plan
  PLAN_NOT_FOUND: {
    code: 'PLAN_NOT_FOUND',
    httpStatus: 404,
    message: 'Subscription plan not found',
  },
  PLAN_HAS_SUBSCRIPTIONS: {
    code: 'PLAN_HAS_SUBSCRIPTIONS',
    httpStatus: 400,
    message: 'Cannot delete plan with active subscriptions',
  },
}
