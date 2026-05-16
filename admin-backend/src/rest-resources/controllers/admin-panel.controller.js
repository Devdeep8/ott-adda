import prisma from '@/src/lib/prisma.js'
import { sendResponse } from '@/src/helpers/response.helpers.js'

export class AdminPanelController {
  async getDashboard(req, res, next) {
    try {
      const now = new Date()
      const sixMonthsAgo = new Date(now.getFullYear(), now.getMonth() - 5, 1)

      const [totalUsers, activeSubscribers, totalSeries, totalEpisodes, totalRevenueAgg, recentPayments, videoQueue, topSeries, paymentsRecent] = await Promise.all([
        prisma.user.count(),
        prisma.userSubscription.count({ where: { status: 'ACTIVE', endDate: { gt: new Date() } } }),
        prisma.series.count(),
        prisma.episode.count(),
        prisma.payment.aggregate({ _sum: { amountInPaise: true }, where: { status: 'SUCCESS' } }),
        prisma.payment.findMany({ where: { status: 'SUCCESS' }, take: 10, orderBy: { createdAt: 'desc' }, include: { user: true, plan: true } }),
        prisma.videoAsset.groupBy({ by: ['status'], _count: { _all: true } }),
        prisma.series.findMany({ orderBy: { viewCount: 'desc' }, take: 5 }),
        prisma.payment.findMany({ where: { status: 'SUCCESS', createdAt: { gte: sixMonthsAgo } }, orderBy: { createdAt: 'asc' } })
      ])

      // Build monthlyRevenue from paymentsRecent
      const monthlyRevenue = paymentsRecent.reduce((acc, p) => {
        const d = new Date(p.createdAt)
        const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`
        acc[key] = (acc[key] || 0) + (p.amountInPaise || 0)
        return acc
      }, {})

      const totalRevenue = totalRevenueAgg._sum?.amountInPaise || 0

      return sendResponse(req, res, {
        totalUsers,
        activeSubscribers,
        totalSeries,
        totalEpisodes,
        totalRevenue,
        monthlyRevenue,
        recentPayments,
        videoQueue,
        topSeries
      }, 'Dashboard fetched')
    } catch (error) {
      next(error)
    }
  }

  async getAllUsers(req, res, next) {
    try {
      const page = Number(req.query.page) || 1
      const limit = Number(req.query.limit) || 20
      const role = req.query.role
      const subscriptionStatus = req.query.subscriptionStatus

      const where = {}
      if (role) where.role = role

      // Build subscription filter via relation
      const [items, total] = await Promise.all([
        prisma.user.findMany({
          where,
          skip: (page - 1) * limit,
          take: limit,
          include: { subscription: { include: { plan: true } } },
          orderBy: { createdAt: 'desc' }
        }),
        prisma.user.count({ where })
      ])

      // If subscriptionStatus filter provided, filter client side (simple approach)
      const filtered = subscriptionStatus ? items.filter(u => (u.subscription?.status || null) === subscriptionStatus) : items

      return sendResponse(req, res, { items: filtered, page, limit, total }, 'Users fetched')
    } catch (error) {
      next(error)
    }
  }

  async updateUserRole(req, res, next) {
    try {
      const userId = req.params.id
      const { role } = req.body
      if (!['USER', 'ADMIN'].includes(role)) return res.status(400).json({ success: false, message: 'Invalid role' })

      const user = await prisma.user.update({ where: { id: userId }, data: { role } })
      return sendResponse(req, res, user, 'User role updated')
    } catch (error) {
      next(error)
    }
  }
}

export default new AdminPanelController()
