import { BaseService } from '@/src/lib/base.service.js'

export class GetDashboardService extends BaseService {
  async run() {
    const now = new Date()
    const sixMonthsAgo = new Date(now.getFullYear(), now.getMonth() - 5, 1)

    // Get dashboard stats
    const [
      totalUsers,
      activeSubscribers,
      totalSeries,
      totalEpisodes,
      totalRevenueAgg,
      recentPayments,
      videoQueue,
      topSeries,
      paymentsRecent
    ] = await Promise.all([
      this.db.user.count(),
      this.db.userSubscription.count({
        where: {
          status: 'ACTIVE',
          endDate: { gt: new Date() }
        }
      }),
      this.db.series.count(),
      this.db.episode.count(),
      this.db.payment.aggregate({
        _sum: { amountInPaise: true },
        where: { status: 'SUCCESS' }
      }),
      this.db.payment.findMany({
        where: { status: 'SUCCESS' },
        take: 10,
        orderBy: { createdAt: 'desc' },
        include: {
          user: true,
          plan: true
        }
      }),
      this.db.videoAsset.groupBy({
        by: ['status'],
        _count: { _all: true }
      }),
      this.db.series.findMany({
        orderBy: { viewCount: 'desc' },
        take: 5
      }),
      this.db.payment.findMany({
        where: {
          status: 'SUCCESS',
          createdAt: { gte: sixMonthsAgo }
        },
        orderBy: { createdAt: 'asc' }
      })
    ])

    // Build monthly revenue from paymentsRecent
    const monthlyRevenue = paymentsRecent.reduce((acc, p) => {
      const d = new Date(p.createdAt)
      const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`
      acc[key] = (acc[key] || 0) + (p.amountInPaise || 0)
      return acc
    }, {})

    const totalRevenue = totalRevenueAgg._sum?.amountInPaise || 0

    return {
      totalUsers,
      activeSubscribers,
      totalSeries,
      totalEpisodes,
      totalRevenue,
      monthlyRevenue,
      recentPayments,
      videoQueue,
      topSeries
    }
  }
}