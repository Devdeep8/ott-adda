import { adminAxios } from '@/lib/axios'

export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterData {
  email: string
  password: string
  firstName: string
  lastName: string
}

export interface AdminUser {
  id: string
  email: string
  firstName: string
  lastName: string
  role: 'ADMIN' | 'SUPER_ADMIN'
  isActive: boolean
  lastLoginAt?: string
  createdAt: string
  updatedAt: string
}

export interface AuthResponse {
  success: boolean
  data: {
    admin: AdminUser
    adminToken: string
  }
  message: string
}

export const adminAuthService = {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    const response = await adminAxios.post('/auth/login', credentials)

    // Store token and user in localStorage
    if (response.data.success && response.data.data.adminToken) {
      if (typeof window !== 'undefined') {
        localStorage.setItem('admin_token', response.data.data.adminToken)
        localStorage.setItem('admin_user', JSON.stringify(response.data.data.admin))
        // Also store in cookies for server-side rendering
        document.cookie = `adminToken=${response.data.data.adminToken}; path=/; max-age=86400; sameSite=lax`
        document.cookie = `adminUser=${encodeURIComponent(JSON.stringify(response.data.data.admin))}; path=/; max-age=86400; sameSite=lax`
      }
    }

    return response.data
  },

  async register(data: RegisterData): Promise<AuthResponse> {
    const response = await adminAxios.post('/auth/register', data)
    return response.data
  },

  async logout(): Promise<void> {
    try {
      await adminAxios.post('/auth/logout')
    } catch (error) {
      console.error('Logout error:', error)
    } finally {
      // Clear local storage regardless of API call result
      if (typeof window !== 'undefined') {
        localStorage.removeItem('admin_token')
        localStorage.removeItem('admin_user')
        // Clear cookies
        document.cookie = 'adminToken=; path=/; max-age=0'
        document.cookie = 'adminUser=; path=/; max-age=0'
      }
    }
  },

  async getMe(): Promise<AdminUser> {
    const response = await adminAxios.get('/auth/me')
    return response.data.data
  },

  getCurrentUser(): AdminUser | null {
    if (typeof window !== 'undefined') {
      const userStr = localStorage.getItem('admin_user')
      return userStr ? JSON.parse(userStr) : null
    }
    return null
  },

  isAuthenticated(): boolean {
    if (typeof window !== 'undefined') {
      return !!localStorage.getItem('admin_token')
    }
    return false
  },

  getToken(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('admin_token')
    }
    return null
  }
}