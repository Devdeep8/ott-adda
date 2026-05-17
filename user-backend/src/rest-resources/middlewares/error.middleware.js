import { AppError } from '../../errors/app.error.js'
import { Errors } from '../../errors/errorCodes.js'
import config from '../../configs/app.config.js'
import logger from '../../lib/logger.js'
import { handlePrismaError } from '../../errors/prisma.error'



export default function errorMiddleware(error, req, res, next) {
  const ctx = req.context
  const traceId = ctx?.traceId
  const isDev = config.get('env') === 'development'
  let appError
  if (error?.code && typeof error.code === 'string' && error.code.startsWith('P')) {
    appError = handlePrismaError(error, traceId)
  } else if (error instanceof AppError) {
    appError = error
    if (!appError.traceId) appError.traceId = traceId
  } else {
    logger.error('Unhandled error', { error: error.message, stack: error.stack })
    appError = new AppError(Errors.INTERNAL_ERROR, {
      traceId,
      message: isDev ? error.message : undefined,
    })
  }

  if (appError.isCritical || appError.httpStatus >= 500) {
    logger.error(`[${appError.code}] ${appError.message}`, { traceId })
  } else {
    logger.warn(`[${appError.code}] ${appError.message}`, { traceId })
  }

  res.status(appError.httpStatus).json(appError.toResponse())
}