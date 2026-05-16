import axiosInstance from '@/lib/axios'

export const categoriesService = {
  getAll: () =>
    axiosInstance.get('/api/v1/categories'),

  getById: (id: string) =>
    axiosInstance.get(`/api/v1/categories/${id}`),

  getWithSeries: (id: string) =>
    axiosInstance.get(`/api/v1/categories/${id}/series`),
}
