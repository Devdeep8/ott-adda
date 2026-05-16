import axiosInstance from '@/lib/axios'

interface SeriesParams {
  status?: string
  genre?: string
  page?: number
}

export const seriesService = {
  getAll: (params?: SeriesParams) =>
    axiosInstance.get('/api/v1/series', { params }),

  getById: (id: string) =>
    axiosInstance.get(`/api/v1/series/${id}`),

  getBySlug: (slug: string) =>
    axiosInstance.get(`/api/v1/series/by-slug/${slug}`),

  getEpisodes: (seriesId: string) =>
    axiosInstance.get(`/api/v1/series/${seriesId}/episodes`),
}
