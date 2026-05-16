import axiosInstance from '@/lib/axios'

export const episodesService = {
  getById: (id: string) =>
    axiosInstance.get(`/api/v1/episodes/${id}`),

  create: (data: any) =>
    axiosInstance.post('/api/v1/episodes', data),

  update: (id: string, data: any) =>
    axiosInstance.put(`/api/v1/episodes/${id}`, data),

  delete: (id: string) =>
    axiosInstance.delete(`/api/v1/episodes/${id}`),
}
