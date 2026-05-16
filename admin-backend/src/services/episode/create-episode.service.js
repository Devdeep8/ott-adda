import { BaseService } from '@/src/lib/base.service.js'
import { AppError } from '@/src/errors/app.error.js'
import { Errors } from '@/src/errors/errorCodes.js'

export class CreateEpisodeService extends BaseService {
  async run() {
    const {
      seriesId,
      season,
      episodeNumber,
      title,
      description,
      duration,
      thumbnailUrl,
      videoUrl,
      videoType,
      status,
      releaseDate
    } = this.args

    // Check if series exists
    const series = await this.db.series.findUnique({
      where: { id: Number(seriesId) }
    })

    if (!series) {
      throw new AppError(Errors.NOT_FOUND, {
        details: [`Series with ID ${seriesId} not found`]
      })
    }

    // Check if episode number already exists for this series and season
    const existingEpisode = await this.db.episode.findFirst({
      where: {
        seriesId: Number(seriesId),
        season: Number(season || 1),
        episodeNumber: Number(episodeNumber)
      }
    })

    if (existingEpisode) {
      throw new AppError(Errors.VALIDATION_ERROR, {
        details: [`Episode ${episodeNumber} already exists in Season ${season || 1} of this series`]
      })
    }

    // Create episode
    const episode = await this.db.episode.create({
      data: {
        seriesId: Number(seriesId),
        season: Number(season || 1),
        episodeNumber: Number(episodeNumber),
        title,
        description,
        duration: Number(duration),
        thumbnailUrl,
        videoUrl,
        videoType,
        status: status || 'DRAFT',
        releaseDate: releaseDate ? new Date(releaseDate) : null
      }
    })

    return episode
  }
}