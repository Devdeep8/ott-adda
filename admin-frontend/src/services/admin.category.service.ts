import { adminAxios } from '@/lib/axios'

export interface CategoryFormData {
  name: string
  slug?: string
  description?: string
  displayOrder?: number
  isAutomatic?: boolean
  isActive?: boolean
}

export interface Category {
  id: string
  name: string
  slug: string
  description?: string
  displayOrder: number
  isAutomatic: boolean
  isActive: boolean
  createdAt: string
  updatedAt: string
  series?: {
    id: string
    title: string
    displayOrder: number
  }[]
}

export interface CategoriesResponse {
  success: boolean
  data: {
    items: Category[]
    total: number
    page: number
    limit: number
  }
  message: string
}

export const adminCategoryService = {
  async getAll(params?: { page?: number; limit?: number; isActive?: boolean }): Promise<CategoriesResponse> {
    const response = await adminAxios.get('/categories', { params })
    return response.data
  },

  async getById(id: string): Promise<{ success: boolean; data: Category; message: string }> {
    const response = await adminAxios.get(`/categories/${id}`)
    return response.data
  },

  async create(data: CategoryFormData): Promise<{ success: boolean; data: Category; message: string }> {
    const response = await adminAxios.post('/categories', data)
    return response.data
  },

  async update(id: string, data: Partial<CategoryFormData>): Promise<{ success: boolean; data: Category; message: string }> {
    const response = await adminAxios.put(`/categories/${id}`, data)
    return response.data
  },

  async delete(id: string, hardDelete?: boolean): Promise<{ success: boolean; message: string }> {
    const response = await adminAxios.delete(`/categories/${id}`, {
      params: { hardDelete: hardDelete ? 'true' : undefined }
    })
    return response.data
  },

  async updateOrder(id: string, displayOrder: number): Promise<{ success: boolean; data: Category; message: string }> {
    const response = await adminAxios.put(`/categories/${id}/order`, { displayOrder })
    return response.data
  },

  async updateSeriesOrder(categoryId: string, series: { id: string; displayOrder: number }[]): Promise<{ success: boolean; message: string }> {
    const response = await adminAxios.put(`/categories/${categoryId}/series`, { series })
    return response.data
  }
}