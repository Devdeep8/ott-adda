import axiosInstance from '@/lib/axios'

export interface PaymentHistoryFilters {
  page?: number
  limit?: number
  status?: 'PENDING' | 'SUCCESS' | 'FAILED'
}

export const paymentService = {
  getHistory: (params?: PaymentHistoryFilters) =>
    axiosInstance.get('/api/v1/subscriptions/payment-history', { params }),

  getById: (id: string) =>
    axiosInstance.get(`/api/v1/subscriptions/payments/${id}`),
}
