import axiosInstance from '@/lib/axios'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8002'

export const streamService = {
  getManifest: (episodeId: string) =>
    axiosInstance.get(`/api/v1/stream/${episodeId}/manifest`),

  getStreamUrl: (episodeId: string, filename: string) =>
    `${API_BASE_URL}/api/v1/stream/${episodeId}/${filename}`,
}
