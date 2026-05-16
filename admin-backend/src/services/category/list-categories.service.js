import { BaseService } from "@/src/lib/base.service.js";

export class ListCategoriesService extends BaseService {
  async run() {
    const { page = 1, limit = 10, type, isActive } = this.args;

    const where = {};
    if (type) where.type = type;
    if (isActive !== undefined) where.isActive = isActive === "true";

    const [categories, total] = await Promise.all([
      this.db.category.findMany({
        where,
        skip: (page - 1) * limit,
        take: Number(limit),
        orderBy: { order: "asc" },
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
                },
              },
            },
            orderBy: { order: "asc" },
            take: 10,
          },
        },
      }),
      this.db.category.count({ where }),
    ]);

    return {
      categories,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }
}
