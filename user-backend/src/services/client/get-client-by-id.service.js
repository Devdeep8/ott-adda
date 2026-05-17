import { BaseService } from '../../lib/base.service.js'
import { AppError } from '../../errors/app.error.js'
import { Errors } from '../../errors/errorCodes.js'

export default class GetClientByIdService extends BaseService {
  async run() {
    const { id } = this.args
    const businessId = this.context.businessId

    const client = await this.db.client.findFirst({
      where: { id: Number(id), businessId },
    })

    if (!client) {
      throw new AppError(Errors.CLIENT_NOT_FOUND, { traceId: this.traceId })
    }

    return client
  }
}
