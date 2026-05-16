import { BaseController } from '@/src/lib/base.controller.js'
import { sendResponse } from '@/src/helpers/response.helpers.js'
import { ListEpisodesService } from '@/src/services/episode/list-episodes.service.js'
import { CreateEpisodeService } from '@/src/services/episode/create-episode.service.js'
import { GetEpisodeService } from '@/src/services/episode/get-episode.service.js'
import { UpdateEpisodeService } from '@/src/services/episode/update-episode.service.js'
import { DeleteEpisodeService } from '@/src/services/episode/delete-episode.service.js'

export class EpisodeController extends BaseController {
  async list(req, res) {
    try {
      const service = new ListEpisodesService(req.query, req.context)
      const result = await service.run()
      return sendResponse(req, res, result, 'Episodes list fetched')
    } catch (error) {
      return this.handleError(error, res)
    }
  }

  async getById(req, res) {
    try {
      const service = new GetEpisodeService({ id: req.params.id }, req.context)
      const result = await service.run()
      return sendResponse(req, res, result, 'Episode fetched')
    } catch (error) {
      return this.handleError(error, res)
    }
  }

  async create(req, res) {
    try {
      const service = new CreateEpisodeService(req.body, req.context)
      const result = await service.run()
      return sendResponse(req, res, result, 'Episode created')
    } catch (error) {
      return this.handleError(error, res)
    }
  }

  async update(req, res) {
    try {
      const service = new UpdateEpisodeService({ id: req.params.id, ...req.body }, req.context)
      const result = await service.run()
      return sendResponse(req, res, result, 'Episode updated')
    } catch (error) {
      return this.handleError(error, res)
    }
  }

  async delete(req, res) {
    try {
      const service = new DeleteEpisodeService({ id: req.params.id, hardDelete: req.query.hardDelete === 'true' }, req.context)
      const result = await service.run()
      return sendResponse(req, res, result, 'Episode deleted')
    } catch (error) {
      return this.handleError(error, res)
    }
  }
}
