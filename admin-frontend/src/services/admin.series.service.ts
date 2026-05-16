import { adminAxios } from '@/lib/admin-axios'

export interface SeriesFormData {
  title: string
  description: string
  genres: string[]
  status: 'DRAFT' | 'ACTIVE' | 'UPCOMING' | 'ARCHIVED'
  releaseDate: string
  isFeatured: boolean
  thumbnail?: File
  banner?: File
}

export interface Series {
  id: string
  title: string
  description: string
  genres: string[]
  status: string
  releaseDate: string
  isFeatured: boolean
  thumbnail: string
  banner: string
  _count?: {
    episodes: number
  }
  viewCount?: number
  createdAt: string
  updatedAt: string
}

export const adminSeriesService = {
  async getAll(params?: { page?: number; limit?: number; status?: string }) {
    const response = await adminAxios.get('/series', { params })
    return response.data
  },

  async getById(id: string) {
    const response = await adminAxios.get(`/series/${id}`)
    return response.data
  },

  async create(data: SeriesFormData) {
    const formData = new FormData()
    formData.append('title', data.title)
    formData.append('description', data.description)
    formData.append('genres', JSON.stringify(data.genres))
    formData.append('status', data.status)
    formData.append('releaseDate', data.releaseDate)
    formData.append('isFeatured', String(data.isFeatured))
    
    if (data.thumbnail) {
      formData.append('thumbnail', data.thumbnail)
    }
    if (data.banner) {
      formData.append('banner', data.banner)
    }

    const response = await adminAxios.post('/series', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    return response.data
  },

  async update(id: string, data: Partial<SeriesFormData>) {
    const formData = new FormData()
    
    if (data.title) formData.append('title', data.title)
    if (data.description) formData.append('description', data.description)
    if (data.genres) formData.append('genres', JSON.stringify(data.genres))
    if (data.status) formData.append('status', data.status)
    if (data.releaseDate) formData.append('releaseDate', data.releaseDate)
    if (data.isFeatured !== undefined) formData.append('isFeatured', String(data.isFeatured))
    if (data.thumbnail) formData.append('thumbnail', data.thumbnail)
    if (data.banner) formData.append('banner', data.banner)

    const response = await adminAxios.put(`/series/${id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    return response.data
  },

  async delete(id: string) {
    const response = await adminAxios.delete(`/series/${id}`)
    return response.data
  },
}
