'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { toast } from 'sonner'
import { LogOut, ArrowLeft, Check, Clock, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { useAuth } from '@/context/AuthContext'
import { subscriptionService } from '@/services/subscription.service'
import { paymentService } from '@/services/payment.service'

interface Payment {
  id: string
  razorpayOrderId: string
  razorpayPaymentId?: string
  amount: number
  status: 'PENDING' | 'SUCCESS' | 'FAILED'
  createdAt: string
  subscription?: {
    plan: {
      name: string
    }
  }
}

export default function ProfilePage() {
  const router = useRouter()
  const { user, logout } = useAuth()

  const [currentSubscription, setCurrentSubscription] = useState<any>(null)
  const [payments, setPayments] = useState<Payment[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isSigningOut, setIsSigningOut] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)

        // Fetch current subscription and payment history in parallel
        const [subRes, paymentsRes] = await Promise.all([
          subscriptionService.getMySubscription().catch(() => null),
          paymentService.getHistory({ limit: 10 }).catch(() => null),
        ])

        if (subRes?.data?.data) {
          setCurrentSubscription(subRes.data.data)
        }

        if (paymentsRes?.data?.data) {
          setPayments(paymentsRes.data.data)
        }
      } catch (error: any) {
        console.error('Failed to fetch profile data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  const handleLogout = async () => {
    try {
      setIsSigningOut(true)
      await logout()
      toast.success('Logged out successfully')
      router.push('/login')
    } catch (error) {
      toast.error('Failed to logout')
      setIsSigningOut(false)
    }
  }

  const getDaysRemaining = (endDate: string | Date) => {
    const end = new Date(endDate)
    const now = new Date()
    const diff = Math.ceil((end.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
    return diff > 0 ? diff : 0
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'SUCCESS':
        return (
          <div className="flex items-center gap-1">
            <Check className="w-4 h-4 text-green-500" />
            <span className="text-green-500">Success</span>
          </div>
        )
      case 'PENDING':
        return (
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-yellow-500" />
            <span className="text-yellow-500">Pending</span>
          </div>
        )
      case 'FAILED':
        return (
          <div className="flex items-center gap-1">
            <X className="w-4 h-4 text-red-500" />
            <span className="text-red-500">Failed</span>
          </div>
        )
      default:
        return <span className="text-gray-400">{status}</span>
    }
  }

  if (isLoading) {
    return (
      <main className="bg-black min-h-screen text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="h-96 bg-gray-800 rounded animate-pulse" />
        </div>
      </main>
    )
  }

  return (
    <main className="bg-black min-h-screen text-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/home"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold mb-2">My Profile</h1>
          <p className="text-gray-400">Manage your account and subscription</p>
        </div>

        {/* User Info Card */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 md:p-8 mb-8">
          <h2 className="text-xl font-bold text-white mb-6">Account Information</h2>

          <div className="space-y-4">
            <div>
              <p className="text-gray-400 text-sm mb-1">Full Name</p>
              <p className="text-white font-medium">{user?.name || 'N/A'}</p>
            </div>

            <div>
              <p className="text-gray-400 text-sm mb-1">Email Address</p>
              <p className="text-white font-medium">{user?.email || 'N/A'}</p>
            </div>

            <div>
              <p className="text-gray-400 text-sm mb-1">Account Role</p>
              <Badge
                className={`${
                  user?.role === 'ADMIN'
                    ? 'bg-purple-600'
                    : 'bg-blue-600'
                }`}
              >
                {user?.role === 'ADMIN' ? 'Administrator' : 'User'}
              </Badge>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800">
            <Button
              onClick={handleLogout}
              disabled={isSigningOut}
              className="bg-red-600 hover:bg-red-700 text-white flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              {isSigningOut ? 'Signing Out...' : 'Sign Out'}
            </Button>
          </div>
        </div>

        {/* Subscription Card */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 md:p-8 mb-8">
          <h2 className="text-xl font-bold text-white mb-6">Subscription Status</h2>

          {currentSubscription?.status === 'ACTIVE' ? (
            <div className="space-y-4">
              <div className="flex items-center gap-3 pb-4 border-b border-gray-800">
                <Check className="w-6 h-6 text-green-600 shrink-0" />
                <div>
                  <p className="text-white font-semibold">
                    {currentSubscription.plan?.name} Plan
                  </p>
                  <p className="text-gray-400 text-sm">Active</p>
                </div>
              </div>

              <div>
                <p className="text-gray-400 text-sm mb-1">Subscription Started</p>
                <p className="text-white font-medium">
                  {new Date(currentSubscription.startDate).toLocaleDateString()}
                </p>
              </div>

              <div>
                <p className="text-gray-400 text-sm mb-1">Expires On</p>
                <p className="text-white font-medium">
                  {new Date(currentSubscription.endDate).toLocaleDateString()}
                </p>
              </div>

              <div>
                <p className="text-gray-400 text-sm mb-1">Days Remaining</p>
                <p className="text-green-500 font-bold">
                  {getDaysRemaining(currentSubscription.endDate)} days
                </p>
              </div>

              <div className="pt-4 border-t border-gray-800">
                <Link href="/subscribe">
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    Upgrade or Change Plan
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-400 mb-4">You don't have an active subscription</p>
              <Link href="/subscribe">
                <Button className="bg-red-600 hover:bg-red-700">
                  Subscribe Now
                </Button>
              </Link>
            </div>
          )}
        </div>

        {/* Payment History */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 md:p-8">
          <h2 className="text-xl font-bold text-white mb-6">Payment History</h2>

          {payments.length > 0 ? (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="border-b border-gray-700">
                  <TableRow>
                    <TableHead className="text-gray-400">Order ID</TableHead>
                    <TableHead className="text-gray-400">Plan</TableHead>
                    <TableHead className="text-gray-400">Amount</TableHead>
                    <TableHead className="text-gray-400">Status</TableHead>
                    <TableHead className="text-gray-400">Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {payments.map((payment) => (
                    <TableRow
                      key={payment.id}
                      className="border-b border-gray-800 hover:bg-gray-800/50"
                    >
                      <TableCell className="text-gray-300 text-sm font-mono">
                        {payment.razorpayOrderId.slice(0, 12)}...
                      </TableCell>
                      <TableCell className="text-gray-300">
                        {payment.subscription?.plan?.name || 'N/A'}
                      </TableCell>
                      <TableCell className="text-white font-medium">
                        ₹{(payment.amount / 100).toFixed(2)}
                      </TableCell>
                      <TableCell>{getStatusBadge(payment.status)}</TableCell>
                      <TableCell className="text-gray-400 text-sm">
                        {new Date(payment.createdAt).toLocaleDateString()}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-400">No payments yet</p>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
