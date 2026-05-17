import axiosInstance from '@/lib/axios'

export interface SaveProgressData {
  episodeId: string
  seriesId: string
  progressSeconds: number
  durationSeconds: number
}

export const watchHistoryService = {
  saveProgress: (data: SaveProgressData) =>
    axiosInstance.post('/api/v1/watch-history', data),

  getContinueWatching: () =>
    axiosInstance.get('/api/v1/watch-history/continue-watching'),

  getHistory: (params?: { page?: number; limit?: number }) =>
    axiosInstance.get('/api/v1/watch-history', { params }),

  removeFromHistory: (episodeId: string) =>
    axiosInstance.delete(`/api/v1/watch-history/${episodeId}`),
}
