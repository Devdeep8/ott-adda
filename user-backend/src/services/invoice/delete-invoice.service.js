import { BaseService } from '../../lib/base.service.js'
import { AppError } from '../../errors/app.error.js'
import { Errors } from '../../errors/errorCodes.js'
import { InvoiceStatus } from '../../prisma/generated/prisma/client'

export default class DeleteInvoiceService extends BaseService {
  async run() {
    const { id } = this.args
    const businessId = this.context.businessId

    const invoice = await this.db.invoice.findFirst({
      where: { id: Number(id), businessId },
    })

    if (!invoice) {
      throw new AppError(Errors.INVOICE_NOT_FOUND, { traceId: this.traceId })
    }

    if (invoice.status !== InvoiceStatus.DRAFT) {
      throw new AppError(Errors.INVOICE_NOT_DRAFT, { traceId: this.traceId })
    }

    await this.db.invoice.delete({
      where: { id: Number(id) },
    })

    return { message: 'Invoice deleted successfully' }
  }
}
