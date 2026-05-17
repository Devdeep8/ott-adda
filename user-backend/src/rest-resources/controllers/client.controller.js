import { sendResponse } from '../../helpers/response.helpers.js'
import CreateClientService from '../../services/client/create-client.service.js'
import GetClientsService from '../../services/client/get-clients.service.js'
import GetClientByIdService from '../../services/client/get-client-by-id.service.js'
import UpdateClientService from '../../services/client/update-client.service.js'
import DeleteClientService from '../../services/client/delete-client.service.js'

export default class ClientController {
  static async create(req, res, next) {
    try {
      const result = await CreateClientService.execute(req.body, req.context)
      sendResponse({ res }, result, 'Client created successfully')
    } catch (error) { next(error) }
  }

  static async list(req, res, next) {
    try {
      const result = await GetClientsService.execute({}, req.context)
      sendResponse({ res }, result)
    } catch (error) { next(error) }
  }

  static async getById(req, res, next) {
    try {
      const result = await GetClientByIdService.execute({ id: req.params.id }, req.context)
      sendResponse({ res }, result)
    } catch (error) { next(error) }
  }

  static async update(req, res, next) {
    try {
      const result = await UpdateClientService.execute({ id: req.params.id, ...req.body }, req.context)
      sendResponse({ res }, result, 'Client updated successfully')
    } catch (error) { next(error) }
  }

  static async delete(req, res, next) {
    try {
      const result = await DeleteClientService.execute({ id: req.params.id }, req.context)
      sendResponse({ res }, result, 'Client deleted successfully')
    } catch (error) { next(error) }
  }
}
