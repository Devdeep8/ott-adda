import { adminAxios } from '@/lib/admin-axios'

export interface EpisodeFormData {
  seriesId: string
  episodeNumber: number
  title: string
  description: string
  isFreePreview: boolean
  thumbnail?: File
}

export interface Episode {
  id: string
  seriesId: string
  episodeNumber: number
  title: string
  description: string
  duration: number
  thumbnail: string
  status: 'PENDING' | 'PROCESSING' | 'READY' | 'FAILED'
  isFreePreview: boolean
  streamUrl?: string
  createdAt: string
  updatedAt: string
}

export const adminEpisodeService = {
  async getBySeries(seriesId: string, params?: { page?: number; limit?: number }) {
    const response = await adminAxios.get(`/series/${seriesId}/episodes`, { params })
    return response.data
  },

  async getById(id: string) {
    const response = await adminAxios.get(`/episodes/${id}`)
    return response.data
  },

  async create(data: EpisodeFormData) {
    const formData = new FormData()
    formData.append('seriesId', data.seriesId)
    formData.append('episodeNumber', String(data.episodeNumber))
    formData.append('title', data.title)
    formData.append('description', data.description)
    formData.append('isFreePreview', String(data.isFreePreview))
    
    if (data.thumbnail) {
      formData.append('thumbnail', data.thumbnail)
    }

    const response = await adminAxios.post('/episodes', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    return response.data
  },

  async update(id: string, data: Partial<EpisodeFormData>) {
    const formData = new FormData()
    
    if (data.episodeNumber) formData.append('episodeNumber', String(data.episodeNumber))
    if (data.title) formData.append('title', data.title)
    if (data.description) formData.append('description', data.description)
    if (data.isFreePreview !== undefined) formData.append('isFreePreview', String(data.isFreePreview))
    if (data.thumbnail) formData.append('thumbnail', data.thumbnail)

    const response = await adminAxios.put(`/episodes/${id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    return response.data
  },

  async delete(id: string) {
    const response = await adminAxios.delete(`/episodes/${id}`)
    return response.data
  },
}
