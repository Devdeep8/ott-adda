import { BaseService } from '@/src/lib/base.service.js'
import { AppError } from '@/src/errors/app.error.js'
import { Errors } from '@/src/errors/errorCodes.js'

export class UpdateEpisodeService extends BaseService {
  async run() {
    const { id } = this.args
    const updateData = { ...this.args }
    delete updateData.id

    // Check if episode exists
    const existingEpisode = await this.db.episode.findUnique({
      where: { id: Number(id) }
    })

    if (!existingEpisode) {
      throw new AppError(Errors.NOT_FOUND, {
        details: [`Episode with ID ${id} not found`]
      })
    }

    // Check if changing episode number and if it conflicts
    if (updateData.episodeNumber) {
      const conflictEpisode = await this.db.episode.findFirst({
        where: {
          seriesId: existingEpisode.seriesId,
          season: updateData.season || existingEpisode.season,
          episodeNumber: Number(updateData.episodeNumber),
          id: { not: Number(id) }
        }
      })

      if (conflictEpisode) {
        throw new AppError(Errors.VALIDATION_ERROR, {
          details: [`Episode ${updateData.episodeNumber} already exists in this season`]
        })
      }
    }

    // Convert numeric fields
    if (updateData.duration !== undefined) {
      updateData.duration = Number(updateData.duration)
    }
    if (updateData.season !== undefined) {
      updateData.season = Number(updateData.season)
    }
    if (updateData.episodeNumber !== undefined) {
      updateData.episodeNumber = Number(updateData.episodeNumber)
    }

    // Convert date if provided
    if (updateData.releaseDate) {
      updateData.releaseDate = new Date(updateData.releaseDate)
    }

    // Update episode
    const episode = await this.db.episode.update({
      where: { id: Number(id) },
      data: updateData
    })

    return episode
  }
}