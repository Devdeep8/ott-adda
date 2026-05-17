import { BaseService } from '../../lib/base.service.js'
import { AppError } from '../../errors/app.error.js'
import { Errors } from '../../errors/errorCodes.js'

export default class GetInvoiceByIdService extends BaseService {
  async run() {
    const { id } = this.args
    const businessId = this.context.businessId

    console.log("id", id, businessId)
    const invoice = await this.db.invoice.findFirst({
      where: { id: Number(id), businessId },
      include: {
        items: true,
        client: true,
        business: {
          select: {
            id: true,
            name: true,
            logoUrl: true,
            address: true,
            city: true,
            state: true,
            country: true,
            zipCode: true,
            phone: true,
            taxId: true,
          },
        },
        events: {
          orderBy: { createdAt: 'asc' },
        },
      },
    })

    if (!invoice) {
      throw new AppError(Errors.INVOICE_NOT_FOUND, { traceId: this.traceId })
    }

    return invoice
  }
}
