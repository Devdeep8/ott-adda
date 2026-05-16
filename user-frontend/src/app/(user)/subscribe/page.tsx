'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { Check, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { subscriptionService, type VerifyPaymentData } from '@/services/subscription.service'
import { SubscriptionPlan } from '@/types/ott.types'
import { User } from '@/types/auth.types'
import { useAuth } from '@/context/AuthContext'

declare global {
  interface Window {
    Razorpay: any
  }
}

export default function SubscribePage() {
  const router = useRouter()
  const { user } = useAuth()

  const [plans, setPlans] = useState<SubscriptionPlan[]>([])
  const [currentSubscription, setCurrentSubscription] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [loadingPlanId, setLoadingPlanId] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)

        // Fetch plans and current subscription in parallel
        const [plansRes, subRes] = await Promise.all([
          subscriptionService.getPlans(),
          subscriptionService.getMySubscription().catch(() => null),
        ])

        const plansData = plansRes.data?.data || []
        setPlans(plansData)

        if (subRes?.data?.data) {
          setCurrentSubscription(subRes.data.data)
        }
      } catch (error: any) {
        console.error('Failed to fetch subscription data:', error)
        toast.error('Failed to load subscription plans')
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  const handleSubscribe = async (planId: string) => {
    try {
      setLoadingPlanId(planId)

      const isDev = process.env.NODE_ENV === 'development'
      const hasRazorpayKey = !!process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID

      // Use mock payment in development or if no Razorpay key
      if (isDev || !hasRazorpayKey) {
        const response = await subscriptionService.mockPayment(planId)
        toast.success('🎉 Subscribed successfully!')
        router.push('/home')
        return
      }

      // Create payment order
      const orderRes = await subscriptionService.createOrder(planId)
      const orderData = orderRes.data?.data

      if (!orderData?.razorpayOrderId) {
        toast.error('Failed to create payment order')
        return
      }

      // Load Razorpay script
      const script = document.createElement('script')
      script.src = 'https://checkout.razorpay.com/v1/checkout.js'
      script.async = true

      script.onload = () => {
        openRazorpayCheckout({
          orderId: orderData.razorpayOrderId,
          amount: orderData.amount,
          currency: orderData.currency || 'INR',
          planId,
        })
      }

      script.onerror = () => {
        toast.error('Failed to load Razorpay. Please try again.')
        setLoadingPlanId(null)
      }

      document.body.appendChild(script)
    } catch (error: any) {
      console.error('Payment error:', error)
      toast.error(error?.response?.data?.message || 'Payment failed. Please try again.')
      setLoadingPlanId(null)
    }
  }

  const openRazorpayCheckout = ({
    orderId,
    amount,
    currency,
    planId,
  }: {
    orderId: string
    amount: number
    currency: string
    planId: string
  }) => {
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount,
      currency,
      name: 'OTT Adda',
      description: 'Premium Subscription',
      order_id: orderId,
      handler: async (response: any) => {
        try {
          await subscriptionService.verifyPayment({
            razorpayOrderId: orderId,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpaySignature: response.razorpay_signature,
            planId,
          })
          toast.success('🎉 Subscribed successfully!')
          router.push('/home')
        } catch (error: any) {
          console.error('Verification error:', error)
          toast.error(
            error?.response?.data?.message ||
              'Payment verification failed. Please contact support.'
          )
          setLoadingPlanId(null)
        }
      },
      prefill: {
        email: user?.email || '',
        name: user?.name || '',
      },
      theme: {
        color: '#dc2626',
      },
    }

    const rzp = new window.Razorpay(options)
    rzp.on('payment.failed', () => {
      toast.error('Payment failed. Please try again.')
      setLoadingPlanId(null)
    })
    rzp.open()
  }

  const getDaysRemaining = (endDate: string | Date) => {
    const end = new Date(endDate)
    const now = new Date()
    const diff = Math.ceil((end.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
    return diff > 0 ? diff : 0
  }

  if (isLoading) {
    return (
      <main className="bg-black min-h-screen text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="h-32 bg-gray-800 rounded animate-pulse mb-4" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-96 bg-gray-800 rounded-2xl animate-pulse"
              />
            ))}
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="bg-black min-h-screen text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Choose Your Plan
          </h1>
          <p className="text-gray-400 text-lg">
            Unlock unlimited entertainment with flexible subscription options
          </p>
        </div>

        {/* Current Subscription Card */}
        {currentSubscription?.status === 'ACTIVE' && (
          <div className="bg-gray-900 border-2 border-green-600 rounded-2xl p-6 mb-12 max-w-2xl mx-auto">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-600 mt-1 shrink-0" />
                <div>
                  <p className="text-white font-semibold text-lg">
                    ✓ Currently subscribed to{' '}
                    <span className="text-green-600">
                      {currentSubscription.plan?.name}
                    </span>
                  </p>
                  {currentSubscription.endDate && (
                    <p className="text-gray-400 text-sm mt-1">
                      Expires:{' '}
                      <span className="text-white font-medium">
                        {new Date(currentSubscription.endDate).toLocaleDateString()}{' '}
                        ({getDaysRemaining(currentSubscription.endDate)} days remaining)
                      </span>
                    </p>
                  )}
                  <button className="text-red-500 hover:text-red-400 text-sm font-medium mt-3 transition-colors">
                    Upgrade or Manage
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => {
            const isPopular = index === 1 // Quarterly plan
            const monthlyPrice = Math.round(
              (plan.priceInPaise / 100 / plan.durationDays) * 30
            )

            return (
              <div
                key={plan.id}
                className={`relative bg-gray-900 border-2 rounded-2xl p-6 md:p-8 transition-all hover:border-red-600 ${
                  isPopular ? 'border-yellow-500 md:scale-105 md:z-10' : 'border-gray-700'
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black px-4 py-1">
                    MOST POPULAR
                  </Badge>
                )}

                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-red-600">
                      ₹{Math.round(plan.priceInPaise / 100)}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mt-2">
                    ₹{monthlyPrice}/month equivalent
                  </p>
                </div>

                {/* Features */}
                {plan.features && plan.features.length > 0 && (
                  <div className="space-y-3 mb-8 pb-8 border-b border-gray-700">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Subscribe Button */}
                <Button
                  onClick={() => handleSubscribe(plan.id)}
                  disabled={loadingPlanId === plan.id}
                  className={`w-full py-3 font-semibold text-base rounded-lg transition-colors ${
                    isPopular
                      ? 'bg-red-600 hover:bg-red-700 text-white'
                      : 'bg-gray-800 hover:bg-gray-700 text-white'
                  } ${loadingPlanId === plan.id ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {loadingPlanId === plan.id ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Processing...
                    </span>
                  ) : (
                    'Subscribe Now'
                  )}
                </Button>
              </div>
            )
          })}
        </div>

        {/* Info Text */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            💳 Secure payment powered by Razorpay. Cancel anytime.
          </p>
        </div>
      </div>
    </main>
  )
}
