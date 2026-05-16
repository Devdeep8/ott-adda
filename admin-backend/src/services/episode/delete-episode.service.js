import { BaseService } from '@/src/lib/base.service.js'
import { AppError } from '@/src/errors/app.error.js'
import { Errors } from '@/src/errors/errorCodes.js'

export class DeleteEpisodeService extends BaseService {
  async run() {
    const { id, hardDelete = false } = this.args

    // Check if episode exists
    const existingEpisode = await this.db.episode.findUnique({
      where: { id: Number(id) }
    })

    if (!existingEpisode) {
      throw new AppError(Errors.NOT_FOUND, {
        details: [`Episode with ID ${id} not found`]
      })
    }

    if (hardDelete) {
      // Hard delete - permanently remove
      await this.db.episode.delete({
        where: { id: Number(id) }
      })
    } else {
      // Soft delete
      await this.db.episode.update({
        where: { id: Number(id) },
        data: { deletedAt: new Date() }
      })
    }

    return { message: 'Episode deleted successfully' }
  }
}