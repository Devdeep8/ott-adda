import { BaseService } from '../../lib/base.service.js'
import { AppError } from '../../errors/app.error.js'
import { Errors } from '../../errors/errorCodes.js'
import { InvoiceStatus } from '../../prisma/generated/prisma/client'
import appEvents from '../../events/app-events.js'
import CreateClientService from '../../services/client/create-client.service.js'

export default class CreateInvoiceService extends BaseService {
  validate() {
    const { clientId, clientInfo, issueDate, dueDate, items } = this.args
    const errors = []

    // Either clientId OR clientInfo must be provided, but not both
    if (!clientId && !clientInfo) {
      errors.push({ field: 'clientId', message: 'Either clientId or clientInfo is required' })
    }
    if (clientId && clientInfo) {
      errors.push({ field: 'clientId', message: 'Provide either clientId or clientInfo, not both' })
    }

    // Validate clientInfo if provided (basic validation, full validation in CreateClientService)
    if (clientInfo) {
      if (!clientInfo.name) {
        errors.push({ field: 'clientInfo.name', message: 'Client name is required' })
      }
      if (!clientInfo.email) {
        errors.push({ field: 'clientInfo.email', message: 'Client email is required' })
      }
    }

    if (!issueDate) errors.push({ field: 'issueDate', message: 'Issue date is required' })
    if (!dueDate) errors.push({ field: 'dueDate', message: 'Due date is required' })
    if (!items || !Array.isArray(items) || items.length === 0) {
      errors.push({ field: 'items', message: 'At least one item is required' })
    }

    if (items) {
      items.forEach((item, index) => {
        if (!item.description) {
          errors.push({ field: `items.${index}.description`, message: 'Description is required' })
        }
        if (!item.quantity || item.quantity <= 0) {
          errors.push({ field: `items.${index}.quantity`, message: 'Quantity must be greater than 0' })
        }
        if (!item.rate || item.rate <= 0) {
          errors.push({ field: `items.${index}.rate`, message: 'Rate must be greater than 0' })
        }
      })
    }

    if (errors.length > 0) throw AppError.validation(errors, this.traceId)
  }

  async run() {
    const { clientId, clientInfo, issueDate, dueDate, items, notes, terms, sendNow, taxRate, discount } = this.args
    const businessId = this.context.businessId
    const userId = this.context.userId

    let client = null
    let isNewClient = false

    // Handle client selection vs new client creation
    if (clientId) {
      client = await this.db.client.findFirst({
        where: { id: Number(clientId), businessId },
      })

      if (!client) {
        throw new AppError(Errors.CLIENT_NOT_FOUND, { traceId: this.traceId })
      }
    } else if (clientInfo) {
      // Call CreateClientService using the built-in callService method
      // This ensures all client creation logic is centralized and event is emitted
      client = await this.callService(CreateClientService, clientInfo)
      isNewClient = true
    }

    const business = await this.db.business.findUnique({
      where: { id: businessId },
    })

    if (!business) {
      throw new AppError(Errors.BUSINESS_NOT_FOUND, { traceId: this.traceId })
    }

    const invoiceNumber = `${business.invoicePrefix}-${String(business.nextInvoiceNum).padStart(3, '0')}`

    let subtotal = 0
    const processedItems = items.map(item => {
      const amount = item.quantity * item.rate
      subtotal += amount
      return {
        description: item.description,
        quantity: item.quantity,
        rate: item.rate,
        amount,
      }
    })

    const taxAmount = (subtotal * (taxRate || business.taxRate)) / 100
    const total = subtotal + taxAmount - (discount || 0)

    const result = await this.db.$transaction(async (tx) => {
      const invoice = await tx.invoice.create({
        data: {
          businessId,
          clientId: client.id,
          invoiceNumber,
          status: InvoiceStatus.DRAFT,
          issueDate: new Date(issueDate),
          dueDate: new Date(dueDate),
          subtotal,
          taxRate: taxRate || business.taxRate,
          taxAmount,
          discount: discount || 0,
          total,
          notes,
          terms,
        },
      })

      await tx.invoiceItem.createMany({
        data: processedItems.map(item => ({
          invoiceId: invoice.id,
          ...item,
        })),
      })

      await tx.business.update({
        where: { id: businessId },
        data: { nextInvoiceNum: business.nextInvoiceNum + 1 },
      })

      await tx.invoiceEvent.create({
        data: {
          invoiceId: invoice.id,
          businessId,
          eventType: 'CREATED',
          actorType: 'USER',
          actorId: userId,
        },
      })

      return invoice
    })

    // Emit invoice.created event
    appEvents.emit('invoice.created', {
      invoiceId: result.id,
      businessId,
      userId,
      clientId: client.id,
      invoiceData: {
        invoiceNumber: result.invoiceNumber,
        total: result.total,
        status: result.status,
        isNewClient,
      },
    })

    if (sendNow) {
      appEvents.emit('invoice.send', {
        invoiceId: result.id,
        businessId,
        userId,
      })
    }

    const invoiceWithItems = await this.db.invoice.findUnique({
      where: { id: result.id },
      include: {
        items: true,
        client: true,
        business: {
          select: {
            id: true,
            name: true,
            logoUrl: true,
          },
        },
      },
    })

    return invoiceWithItems
  }
}
