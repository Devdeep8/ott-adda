'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { subscriptionService } from '@/services/subscription.service'
import { SubscriptionPlan } from '@/types/ott.types'
import { Check } from 'lucide-react'

interface SubscribeModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SubscribeModal({ open, onOpenChange }: SubscribeModalProps) {
  const router = useRouter()
  const [plans, setPlans] = useState<SubscriptionPlan[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (open) {
      fetchPlans()
    }
  }, [open])

  const fetchPlans = async () => {
    try {
      setIsLoading(true)
      const response = await subscriptionService.getPlans()
      const plansData = response.data?.data || []
      setPlans(plansData)
    } catch (error: any) {
      console.error('Failed to fetch subscription plans:', error)
      toast.error('Failed to load subscription plans')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubscribe = () => {
    router.push('/subscribe')
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-gray-900 border-gray-800 max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-white text-2xl">
            Subscribe to Continue Watching
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            Unlock premium content with one of our subscription plans
          </DialogDescription>
        </DialogHeader>

        {isLoading ? (
          <div className="py-12 text-center">
            <div className="w-8 h-8 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-gray-400 mt-4">Loading plans...</p>
          </div>
        ) : plans.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
            {plans.map((plan) => (
              <PlanCard key={plan.id} plan={plan} />
            ))}
          </div>
        ) : (
          <div className="py-12 text-center">
            <p className="text-gray-400">No subscription plans available</p>
          </div>
        )}

        <div className="flex gap-3 justify-end mt-6">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="border-gray-700 text-white hover:bg-gray-800"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubscribe}
            className="bg-red-600 hover:bg-red-700 text-white"
          >
            View All Plans
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

interface PlanCardProps {
  plan: SubscriptionPlan
}

function PlanCard({ plan }: PlanCardProps) {
  const priceInRupees = (plan.priceInPaise / 100).toFixed(0)

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 flex flex-col hover:border-red-600 transition-colors">
      <h3 className="text-white font-bold text-lg mb-2">{plan.name}</h3>

      <div className="mb-4">
        <span className="text-white text-2xl font-bold">₹{priceInRupees}</span>
        <span className="text-gray-400 text-sm ml-2">/{plan.durationDays} days</span>
      </div>

      {plan.features && plan.features.length > 0 && (
        <div className="space-y-2 mb-4 flex-1">
          {plan.features.slice(0, 3).map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
              <span className="text-gray-300 text-sm">{feature}</span>
            </div>
          ))}
          {plan.features.length > 3 && (
            <p className="text-gray-400 text-sm">
              +{plan.features.length - 3} more features
            </p>
          )}
        </div>
      )}

      <Button className="w-full bg-red-600 hover:bg-red-700 text-white mt-auto">
        Choose Plan
      </Button>
    </div>
  )
}
