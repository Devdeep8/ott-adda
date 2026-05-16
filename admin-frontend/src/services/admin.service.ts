import axiosInstance from '@/lib/axios'

export const adminService = {
  getDashboard: () =>
    axiosInstance.get('/api/v1/admin/dashboard'),

  getUsers: (params?: { page?: number; limit?: number; role?: string; subscriptionStatus?: string }) =>
    axiosInstance.get('/api/v1/admin/users', { params }),

  updateUserRole: (userId: string, role: string) =>
    axiosInstance.put(`/api/v1/admin/users/${userId}/role`, { role }),

  getSeries: (params?: { page?: number; limit?: number }) =>
    axiosInstance.get('/api/v1/series', { params }),

  getCategories: () =>
    axiosInstance.get('/api/v1/categories'),
}
