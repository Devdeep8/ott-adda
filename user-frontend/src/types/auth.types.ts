export interface SubscriptionInfo {
  planId: string
  planName: string
  planSlug: string
  status: 'ACTIVE' | 'CANCELLED' | 'EXPIRED' | 'PENDING' | 'PAUSED'
  startDate: string
  endDate: string
}

export interface User {
  id: string
  email: string
  name?: string
  role: 'USER' | 'ADMIN'
  isActive: boolean
  createdAt: string
  updatedAt: string
  subscription?: SubscriptionInfo | null
}

export interface AuthResponse {
  success: boolean
  message?: string
  data: {
    user: User
    accessToken: string
    refreshToken: string
  }
}

export interface LoginPayload {
  email: string
  password: string
}

export interface RegisterPayload {
  name: string
  email: string
  password: string
}
