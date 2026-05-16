import { BaseService } from "@/src/lib/base.service.js";
import { AppError } from "@/src/errors/app.error.js";
import { Errors } from "@/src/errors/errorCodes.js";

export class CreateSeriesService extends BaseService {
  async run() {
    const {
      title,
      slug,
      description,
      bannerUrl,
      backdropUrl,
      trailerUrl,
      releaseDate,
      status,
      type,
      language,
      duration,
      rating,
      genres,
      tags,
      cast,
      crew,
      metadata,
      ageRating,
      isPremium,
      isFeatured,
    } = this.args;

    // Check if slug already exists
    const existingSeries = await this.db.series.findUnique({
      where: { slug },
    });

    if (existingSeries) {
      throw new AppError(Errors.VALIDATION_ERROR, {
        details: [`Series with slug '${slug}' already exists`],
      });
    }

    // Create series
    const series = await this.db.series.create({
      data: {
        title,
        slug,
        description,
        bannerUrl,
        backdropUrl,
        trailerUrl,
        releaseDate: releaseDate ? new Date(releaseDate) : null,
        status: status || "DRAFT",
        type: type || "SERIES",
        language,
        duration: duration ? Number(duration) : null,
        rating: rating ? Number(rating) : null,
        genres: genres ? JSON.parse(genres) : null,
        tags: tags ? JSON.parse(tags) : null,
        cast: cast ? JSON.parse(cast) : null,
        crew: crew ? JSON.parse(crew) : null,
        metadata: metadata ? JSON.parse(metadata) : null,
        ageRating,
        isPremium: isPremium || false,
        isFeatured: isFeatured || false,
      },
    });

    return series;
  }
}
