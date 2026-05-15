import config from '@/src/configs/app.config.js'

export class BaseController {
  constructor() {
    this.appName = config.get('app.name')
    this.env = config.get('env')
  }

  handleError(error, res) {
    if (error.httpStatus) {
      return res.status(error.httpStatus).json(error.toResponse())
    }
    return res.status(500).json({
      success: false,
      error: {
        code: 'INTERNAL_ERROR',
        message: error.message || 'Internal server error',
      }
    })
  }
}
