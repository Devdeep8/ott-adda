import { BaseService } from "@/src/lib/base.service.js";
import { AppError } from "@/src/errors/app.error.js";
import { Errors } from "@/src/errors/errorCodes.js";

export class GetEpisodeService extends BaseService {
  async run() {
    const { id } = this.args;

    const episode = await this.db.episode.findUnique({
      where: { id: Number(id) },
      include: {
        series: {
          select: {
            id: true,
            title: true,
            slug: true,
            bannerUrl: true,
          },
        },
      },
    });

    if (!episode) {
      throw new AppError(Errors.NOT_FOUND, {
        details: [`Episode with ID ${id} not found`],
      });
    }

    return episode;
  }
}
