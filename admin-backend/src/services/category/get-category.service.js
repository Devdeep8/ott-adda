import { BaseService } from "@/src/lib/base.service.js";
import { AppError } from "@/src/errors/app.error.js";
import { Errors } from "@/src/errors/errorCodes.js";

export class GetCategoryService extends BaseService {
  async run() {
    const { id } = this.args;

    const category = await this.db.category.findUnique({
      where: { id: Number(id) },
      include: {
        series: {
          include: {
            series: {
              select: {
                id: true,
                title: true,
                slug: true,
                bannerUrl: true,
                status: true,
                isPremium: true,
                rating: true,
              },
            },
          },
          orderBy: { order: "asc" },
        },
      },
    });

    if (!category) {
      throw new AppError(Errors.NOT_FOUND, {
        details: [`Category with ID ${id} not found`],
      });
    }

    return category;
  }
}
