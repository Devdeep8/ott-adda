declare module '@/src/lib/base.service.js' {
  export class BaseService {
    args: any
    context: any
    logger: any
    traceId: string | null
    userId: string | null
    user: any
    static execute(args?: any, context?: any): Promise<any>
    validate?(): void
    run(): Promise<any>
    callService(ServiceClass: any, args?: any): Promise<any>
    get db(): any
  }

  export default BaseService
}

declare module '@/src/errors/app.error.js' {
  export class AppError extends Error {
    code: string
    httpStatus: number
    isCritical: boolean
    traceId: string | null
    details: any
    timestamp: string

    constructor(errorDef: any, options?: any)
    toResponse(): any
    static validation(details: any, traceId?: string | null): AppError
    static wrap(error: unknown, traceId?: string | null): AppError
  }
}

declare module '@/src/errors/errorCodes.js' {
  export const Errors: Record<string, any>
}

declare module '@/src/lib/prisma.js' {
  const prisma: any
  export default prisma
}
