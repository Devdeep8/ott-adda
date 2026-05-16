import axiosInstance from '@/lib/axios'

export interface VerifyPaymentData {
  razorpayOrderId: string
  razorpayPaymentId: string
  razorpaySignature: string
  planId: string
}

export const subscriptionService = {
  getPlans: () =>
    axiosInstance.get('/api/v1/subscriptions/plans'),

  getMySubscription: () =>
    axiosInstance.get('/api/v1/subscriptions/my'),

  createOrder: (planId: string) =>
    axiosInstance.post('/api/v1/subscriptions/payment/create-order', { planId }),

  verifyPayment: (data: VerifyPaymentData) =>
    axiosInstance.post('/api/v1/subscriptions/payment/verify', data),

  mockPayment: (planId: string) =>
    axiosInstance.post('/api/v1/subscriptions/payment/mock', { planId }),
}
