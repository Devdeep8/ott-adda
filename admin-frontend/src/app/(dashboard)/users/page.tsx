'use client'

import { useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { Shield, User } from 'lucide-react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { adminAxios } from '@/lib/admin-axios'

interface User {
  id: string
  name: string
  email: string
  role: 'USER' | 'ADMIN'
  subscription?: {
    status: 'ACTIVE' | 'EXPIRED' | 'CANCELLED'
    plan?: {
      name: string
    }
    expiresAt?: string
  }
  createdAt: string
}

interface PaginatedResponse {
  data: User[]
  pagination: {
    total: number
    page: number
    limit: number
    pages: number
  }
}

type FilterType = 'all' | 'subscribers' | 'free' | 'admin'

const FILTERS: { value: FilterType; label: string }[] = [
  { value: 'all', label: 'All Users' },
  { value: 'subscribers', label: 'Subscribers' },
  { value: 'free', label: 'Free Users' },
  { value: 'admin', label: 'Admins' },
]

export default function UsersPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentFilter = (searchParams.get('filter') as FilterType) || 'all'
  const currentPage = parseInt(searchParams.get('page') || '1')

  const [users, setUsers] = useState<User[]>([])
  const [pagination, setPagination] = useState({
    total: 0,
    page: 1,
    limit: 20,
    pages: 1,
  })
  const [isLoading, setIsLoading] = useState(true)
  const [roleConfirm, setRoleConfirm] = useState<{
    userId: string
    newRole: 'USER' | 'ADMIN'
  } | null>(null)
  const [isUpdating, setIsUpdating] = useState(false)

  useEffect(() => {
    fetchUsers()
  }, [currentFilter, currentPage])

  const fetchUsers = async () => {
    try {
      setIsLoading(true)

      const params: any = {
        page: currentPage,
        limit: 20,
      }

      if (currentFilter === 'subscribers') {
        params.subscriptionStatus = 'ACTIVE'
      } else if (currentFilter === 'free') {
        params.subscriptionStatus = 'NONE'
      } else if (currentFilter === 'admin') {
        params.role = 'ADMIN'
      }

      const response = await adminAxios.get<PaginatedResponse>(
        '/admin/users',
        { params }
      )

      setUsers(response.data.data || [])
      setPagination(response.data.pagination)
    } catch (error) {
      console.error('Failed to fetch users:', error)
      toast.error('Failed to load users')
    } finally {
      setIsLoading(false)
    }
  }

  const handleRoleChange = async () => {
    if (!roleConfirm) return

    try {
      setIsUpdating(true)
      await adminAxios.put(`/admin/users/${roleConfirm.userId}/role`, {
        role: roleConfirm.newRole,
      })

      toast.success(
        `User role changed to ${roleConfirm.newRole === 'ADMIN' ? 'Admin' : 'User'}`
      )
      await fetchUsers()
    } catch (error: any) {
      console.error('Failed to update role:', error)
      toast.error('Failed to update user role')
    } finally {
      setIsUpdating(false)
      setRoleConfirm(null)
    }
  }

  const getRoleColor = (role: string) => {
    return role === 'ADMIN' ? 'bg-purple-600' : 'bg-gray-600'
  }

  const getSubscriptionColor = (status?: string) => {
    switch (status) {
      case 'ACTIVE':
        return 'bg-green-600'
      case 'EXPIRED':
        return 'bg-red-600'
      default:
        return 'bg-gray-600'
    }
  }

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  const getAvatarBg = (userId: string) => {
    const colors = [
      'bg-red-500',
      'bg-blue-500',
      'bg-green-500',
      'bg-yellow-500',
      'bg-purple-500',
      'bg-pink-500',
    ]
    const index = userId.charCodeAt(0) % colors.length
    return colors[index]
  }

  const handleTabChange = (value: string) => {
    router.push(`/users?filter=${value}&page=1`)
  }

  const handlePageChange = (page: number) => {
    router.push(`/users?filter=${currentFilter}&page=${page}`)
  }

  const handleRoleToggle = (user: User) => {
    const newRole = user.role === 'ADMIN' ? 'USER' : 'ADMIN'
    setRoleConfirm({
      userId: user.id,
      newRole,
    })
  }

  const pageNumbers = []
  const maxPages = Math.min(pagination.pages, 5)
  const startPage = Math.max(1, currentPage - Math.floor(maxPages / 2))
  const endPage = Math.min(pagination.pages, startPage + maxPages - 1)

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i)
  }

  if (isLoading && users.length === 0) {
    return <div className="text-center text-gray-400">Loading...</div>
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold">Users Management</h1>
        <p className="text-gray-400 mt-1">
          Manage platform users, subscriptions, and roles
        </p>
      </div>

      {/* Tabs */}
      <Card className="bg-gray-900 border-gray-800">
        <CardContent className="pt-6">
          <Tabs value={currentFilter} onValueChange={handleTabChange}>
            <TabsList className="bg-gray-800 border-b border-gray-700 grid w-full grid-cols-4 rounded-none">
              {FILTERS.map((filter) => (
                <TabsTrigger
                  key={filter.value}
                  value={filter.value}
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-red-600"
                >
                  {filter.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {FILTERS.map((filter) => (
              <TabsContent key={filter.value} value={filter.value}>
                <div className="overflow-x-auto mt-4">
                  <Table>
                    <TableHeader className="border-b border-gray-700">
                      <TableRow>
                        <TableHead className="text-gray-400">User</TableHead>
                        <TableHead className="text-gray-400">Role</TableHead>
                        <TableHead className="text-gray-400">Subscription</TableHead>
                        <TableHead className="text-gray-400">Plan</TableHead>
                        <TableHead className="text-gray-400">Joined</TableHead>
                        <TableHead className="text-gray-400">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {users.map((user) => (
                        <TableRow
                          key={user.id}
                          className="border-b border-gray-800 hover:bg-gray-800/50"
                        >
                          {/* User Avatar + Info */}
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <div
                                className={`${getAvatarBg(user.id)} w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm shrink-0`}
                              >
                                {getInitials(user.name)}
                              </div>
                              <div>
                                <p className="font-medium">{user.name}</p>
                                <p className="text-xs text-gray-400">{user.email}</p>
                              </div>
                            </div>
                          </TableCell>

                          {/* Role */}
                          <TableCell>
                            <Badge className={getRoleColor(user.role)}>
                              {user.role === 'ADMIN' ? (
                                <Shield className="h-3 w-3 mr-1" />
                              ) : (
                                <User className="h-3 w-3 mr-1" />
                              )}
                              {user.role}
                            </Badge>
                          </TableCell>

                          {/* Subscription Status */}
                          <TableCell>
                            {user.subscription ? (
                              <Badge className={getSubscriptionColor(user.subscription.status)}>
                                {user.subscription.status}
                              </Badge>
                            ) : (
                              <Badge className="bg-gray-600">None</Badge>
                            )}
                          </TableCell>

                          {/* Plan */}
                          <TableCell>
                            {user.subscription?.plan ? (
                              <span className="text-sm">{user.subscription.plan.name}</span>
                            ) : (
                              <span className="text-sm text-gray-400">—</span>
                            )}
                          </TableCell>

                          {/* Joined Date */}
                          <TableCell className="text-sm text-gray-400">
                            {new Date(user.createdAt).toLocaleDateString()}
                          </TableCell>

                          {/* Actions */}
                          <TableCell>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleRoleToggle(user)}
                              className="text-xs border-gray-700 hover:bg-gray-800"
                            >
                              {user.role === 'ADMIN'
                                ? 'Remove Admin'
                                : 'Make Admin'}
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>

                  {users.length === 0 && (
                    <div className="text-center py-8 text-gray-400">
                      No users found
                    </div>
                  )}
                </div>

                {/* Pagination */}
                {pagination.pages > 1 && (
                  <div className="mt-6 flex justify-center">
                    <Pagination>
                      <PaginationContent>
                        {currentPage > 1 && (
                          <PaginationItem>
                            <PaginationPrevious
                              onClick={() => handlePageChange(currentPage - 1)}
                              className="cursor-pointer"
                            />
                          </PaginationItem>
                        )}

                        {startPage > 1 && (
                          <>
                            <PaginationItem>
                              <PaginationLink
                                onClick={() => handlePageChange(1)}
                                className="cursor-pointer"
                              >
                                1
                              </PaginationLink>
                            </PaginationItem>
                            {startPage > 2 && (
                              <PaginationItem>
                                <PaginationEllipsis />
                              </PaginationItem>
                            )}
                          </>
                        )}

                        {pageNumbers.map((page) => (
                          <PaginationItem key={page}>
                            <PaginationLink
                              onClick={() => handlePageChange(page)}
                              isActive={page === currentPage}
                              className="cursor-pointer"
                            >
                              {page}
                            </PaginationLink>
                          </PaginationItem>
                        ))}

                        {endPage < pagination.pages && (
                          <>
                            {endPage < pagination.pages - 1 && (
                              <PaginationItem>
                                <PaginationEllipsis />
                              </PaginationItem>
                            )}
                            <PaginationItem>
                              <PaginationLink
                                onClick={() => handlePageChange(pagination.pages)}
                                className="cursor-pointer"
                              >
                                {pagination.pages}
                              </PaginationLink>
                            </PaginationItem>
                          </>
                        )}

                        {currentPage < pagination.pages && (
                          <PaginationItem>
                            <PaginationNext
                              onClick={() => handlePageChange(currentPage + 1)}
                              className="cursor-pointer"
                            />
                          </PaginationItem>
                        )}
                      </PaginationContent>
                    </Pagination>
                  </div>
                )}

                {/* Pagination Info */}
                <div className="text-center mt-4 text-sm text-gray-400">
                  Showing {(currentPage - 1) * pagination.limit + 1} to{' '}
                  {Math.min(currentPage * pagination.limit, pagination.total)} of{' '}
                  {pagination.total} users
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>

      {/* Role Confirmation Dialog */}
      <AlertDialog open={!!roleConfirm} onOpenChange={() => setRoleConfirm(null)}>
        <AlertDialogContent className="bg-gray-900 border-gray-800">
          <AlertDialogHeader>
            <AlertDialogTitle>Change User Role</AlertDialogTitle>
            <AlertDialogDescription>
              {roleConfirm?.newRole === 'ADMIN'
                ? 'This will grant admin privileges to this user. They will be able to manage series, episodes, and other users.'
                : 'This will revoke admin privileges from this user. They will become a regular user.'}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex gap-4">
            <AlertDialogCancel
              disabled={isUpdating}
              className="bg-gray-800 hover:bg-gray-700 border-gray-700"
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleRoleChange}
              disabled={isUpdating}
              className={
                roleConfirm?.newRole === 'ADMIN'
                  ? 'bg-purple-600 hover:bg-purple-700'
                  : 'bg-red-600 hover:bg-red-700'
              }
            >
              {isUpdating ? 'Updating...' : 'Confirm'}
            </AlertDialogAction>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
