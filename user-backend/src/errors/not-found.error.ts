import { AppError } from './app.error.js'
import { Errors } from './errorCodes.js'

export class NotFoundError extends AppError {
  constructor(message = 'Resource not found', options: { traceId?: string | null } = {}) {
    super(Errors.NOT_FOUND, {
      message,
      traceId: options.traceId ?? null,
    })
  }
}
