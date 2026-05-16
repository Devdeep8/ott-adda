import { adminAxios } from '@/lib/axios'

export interface DashboardData {
  totalUsers: number
  activeSubscribers: number
  totalSeries: number
  totalEpisodes: number
  totalRevenue: number
  monthlyRevenue: Record<string, number>
  recentPayments: Array<{
    id: string
    amountInPaise: number
    status: string
    createdAt: string
    user: { id: string; email: string; firstName?: string; lastName?: string }
    plan: { name: string; priceInPaise: number }
  }>
  videoQueue: Array<{ status: string; _count: { _all: number } }>
  topSeries: Array<{
    id: string
    title: string
    viewCount: number
    thumbnail?: string
    status: string
  }>
}

export interface User {
  id: string
  email: string
  phone?: string
  role: 'USER' | 'ADMIN'
  isActive: boolean
  emailVerified: boolean
  lastLoginAt?: string
  createdAt: string
  updatedAt: string
  subscription?: {
    id: string
    status: string
    startDate: string
    endDate: string
    plan: {
      id: string
      name: string
      slug: string
      priceInPaise: number
      durationDays: number
    }
  }
}

export interface UsersResponse {
  success: boolean
  data: {
    items: User[]
    total: number
    page: number
    limit: number
  }
  message: string
}

export const adminService = {
  async getDashboard(): Promise<{ success: boolean; data: DashboardData; message: string }> {
    const response = await adminAxios.get('/admin/dashboard')
    return response.data
  },

  async getUsers(params?: {
    page?: number
    limit?: number
    role?: string
    subscriptionStatus?: string
  }): Promise<UsersResponse> {
    const response = await adminAxios.get('/admin/users', { params })
    return response.data
  },

  async updateUserRole(userId: string, role: string): Promise<{ success: boolean; data: User; message: string }> {
    const response = await adminAxios.put(`/admin/users/${userId}/role`, { role })
    return response.data
  }
}
