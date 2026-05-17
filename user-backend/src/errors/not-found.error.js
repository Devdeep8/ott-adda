import { AppError } from './app.error.js'
import { Errors } from './errorCodes.js'

export class NotFoundError extends AppError {
  constructor(message = 'Resource not found', options = {}) {
    super(Errors.NOT_FOUND, {
      message,
      traceId: options.traceId ?? null,
    })
  }
}