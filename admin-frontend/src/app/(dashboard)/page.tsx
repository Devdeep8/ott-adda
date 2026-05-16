'use client'

import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'
import { Users, TrendingUp, DollarSign, Video } from 'lucide-react'
import { adminService } from '@/services/admin.service'

interface DashboardData {
  totalUsers: number
  activeSubscribers: number
  totalRevenue: number
  totalSeriesCount: number
  monthlyRevenue: Array<{ month: string; revenue: number }>
  videoQueueStatus: {
    pending: number
    processing: number
    ready: number
    failed: number
  }
  topSeriesByViews: Array<{
    id: string
    title: string
    genres: string[]
    viewCount: number
  }>
  recentPayments: Array<{
    id: string
    razorpayOrderId: string
    amount: number
    status: 'PENDING' | 'SUCCESS' | 'FAILED'
    createdAt: string
    user?: { email: string; name: string }
    userSubscription?: { plan: { name: string } }
  }>
}

export default function DashboardPage() {
  const [data, setData] = useState<DashboardData | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        setIsLoading(true)
        const response = await adminService.getDashboard()
        setData(response.data?.data || response.data)
      } catch (error: any) {
        console.error('Failed to fetch dashboard:', error)
        toast.error('Failed to load dashboard data')
      } finally {
        setIsLoading(false)
      }
    }

    fetchDashboard()
  }, [])

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-32 bg-gray-800 rounded-lg animate-pulse"
            />
          ))}
        </div>
        <div className="h-96 bg-gray-800 rounded-lg animate-pulse" />
      </div>
    )
  }

  if (!data) {
    return <div className="text-center text-gray-400">No data available</div>
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'SUCCESS':
        return 'bg-green-600'
      case 'PENDING':
        return 'bg-yellow-600'
      case 'FAILED':
        return 'bg-red-600'
      default:
        return 'bg-gray-600'
    }
  }

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <p className="text-gray-400 mt-2">Welcome to the OTT Adda admin panel</p>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Users */}
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.totalUsers.toLocaleString()}</div>
            <p className="text-xs text-gray-400 mt-1">Active accounts</p>
          </CardContent>
        </Card>

        {/* Active Subscribers */}
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Subscribers</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.activeSubscribers.toLocaleString()}</div>
            <p className="text-xs text-gray-400 mt-1">Premium users</p>
          </CardContent>
        </Card>

        {/* Total Revenue */}
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-yellow-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ₹{(data.totalRevenue / 100).toLocaleString()}
            </div>
            <p className="text-xs text-gray-400 mt-1">All time</p>
          </CardContent>
        </Card>

        {/* Total Videos Ready */}
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Videos Ready</CardTitle>
            <Video className="h-4 w-4 text-red-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.videoQueueStatus.ready}</div>
            <p className="text-xs text-gray-400 mt-1">Available to stream</p>
          </CardContent>
        </Card>
      </div>

      {/* Monthly Revenue Chart */}
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle>Monthly Revenue</CardTitle>
          <CardDescription>Revenue trend over the last 6 months</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data.monthlyRevenue}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="month" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip
                contentStyle={{ backgroundColor: '#111827', border: '1px solid #374151' }}
                formatter={(value: any) => `₹${(value / 100).toLocaleString()}`}
              />
              <Legend />
              <Bar dataKey="revenue" fill="#E50914" name="Revenue" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Video Processing Queue */}
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle>Video Queue Status</CardTitle>
            <CardDescription>Processing status</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Pending</span>
              <Badge className="bg-yellow-600">{data.videoQueueStatus.pending}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Processing</span>
              <Badge className="bg-blue-600">{data.videoQueueStatus.processing}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Ready</span>
              <Badge className="bg-green-600">{data.videoQueueStatus.ready}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Failed</span>
              <Badge className="bg-red-600">{data.videoQueueStatus.failed}</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle>Platform Stats</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <p className="text-sm text-gray-400">Total Series</p>
              <p className="text-2xl font-bold">{data.totalSeriesCount}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Subscription Rate</p>
              <p className="text-2xl font-bold">
                {data.totalUsers > 0
                  ? Math.round((data.activeSubscribers / data.totalUsers) * 100)
                  : 0}
                %
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Queue Progress */}
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle>Processing Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Completion Rate</span>
                  <span className="text-white font-medium">
                    {(() => {
                      const total =
                        data.videoQueueStatus.pending +
                        data.videoQueueStatus.processing +
                        data.videoQueueStatus.ready +
                        data.videoQueueStatus.failed
                      return total > 0
                        ? Math.round((data.videoQueueStatus.ready / total) * 100)
                        : 0
                    })()}
                    %
                  </span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div
                    className="bg-green-600 h-2 rounded-full"
                    style={{
                      width: `${
                        (() => {
                          const total =
                            data.videoQueueStatus.pending +
                            data.videoQueueStatus.processing +
                            data.videoQueueStatus.ready +
                            data.videoQueueStatus.failed
                          return total > 0
                            ? Math.round((data.videoQueueStatus.ready / total) * 100)
                            : 0
                        })() + '%'
                      }`,
                    }}
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Series Table */}
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle>Top 5 Series by Views</CardTitle>
          <CardDescription>Most watched content</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader className="border-b border-gray-700">
              <TableRow>
                <TableHead className="text-gray-400">Title</TableHead>
                <TableHead className="text-gray-400">Genres</TableHead>
                <TableHead className="text-gray-400 text-right">Views</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.topSeriesByViews.map((series) => (
                <TableRow key={series.id} className="border-b border-gray-800 hover:bg-gray-800/50">
                  <TableCell className="font-medium">{series.title}</TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {series.genres?.slice(0, 2).map((genre) => (
                        <Badge key={genre} className="bg-gray-800 text-gray-300 text-xs">
                          {genre}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="text-right font-medium">
                    {series.viewCount.toLocaleString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Recent Payments */}
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle>Recent Payments</CardTitle>
          <CardDescription>Latest 10 transactions</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader className="border-b border-gray-700">
              <TableRow>
                <TableHead className="text-gray-400">User</TableHead>
                <TableHead className="text-gray-400">Plan</TableHead>
                <TableHead className="text-gray-400">Amount</TableHead>
                <TableHead className="text-gray-400">Status</TableHead>
                <TableHead className="text-gray-400">Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.recentPayments.map((payment) => (
                <TableRow key={payment.id} className="border-b border-gray-800 hover:bg-gray-800/50">
                  <TableCell>
                    <div>
                      <p className="font-medium">{payment.user?.name || 'N/A'}</p>
                      <p className="text-xs text-gray-400">{payment.user?.email || 'N/A'}</p>
                    </div>
                  </TableCell>
                  <TableCell>{payment.userSubscription?.plan?.name || 'N/A'}</TableCell>
                  <TableCell className="font-medium">₹{(payment.amount / 100).toFixed(0)}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(payment.status)}>
                      {payment.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-gray-400">
                    {new Date(payment.createdAt).toLocaleDateString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
