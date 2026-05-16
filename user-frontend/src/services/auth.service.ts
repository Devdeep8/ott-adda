import axiosInstance from '@/lib/axios'
import type { AuthResponse, LoginPayload, RegisterPayload } from '@/types/auth.types'

export const authService = {
  register: (data: RegisterPayload) =>
    axiosInstance.post('/api/v1/auth/register', data),

  login: (data: LoginPayload) =>
    axiosInstance.post('/api/v1/auth/login', data),

  logout: () => 
    axiosInstance.post('/api/v1/auth/logout'),

  getMe: () => 
    axiosInstance.get('/api/v1/auth/me'),
}
