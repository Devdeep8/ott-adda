'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { LogOut, User, Settings } from 'lucide-react'
import { toast } from 'sonner'

export function Navbar() {
  const router = useRouter()
  const { user, logout, isAuthenticated } = useAuth()
  const [isLoggingOut, setIsLoggingOut] = useState(false)

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true)
      await logout()
      toast.success('Logged out successfully')
      router.push('/login')
    } catch (error) {
      toast.error('Failed to logout')
      setIsLoggingOut(false)
    }
  }

  if (!isAuthenticated) {
    return null
  }

  const initials = user?.name
    ?.split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase() || 'U'

  return (
    <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/home" className="flex items-center gap-2">
            <div className="text-2xl font-bold text-red-600">OTT ADDA</div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/home"
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/my-list"
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              My List
            </Link>
          </div>

          {/* Right Side - Avatar Dropdown */}
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-gray-800"
                >
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={user?.name} alt={user?.name} />
                    <AvatarFallback className="bg-red-600 text-white">
                      {initials}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="w-56 bg-gray-900 border-gray-800">
                <div className="px-2 py-1.5">
                  <p className="text-white font-medium text-sm">{user?.name}</p>
                  <p className="text-gray-400 text-xs">{user?.email}</p>
                </div>

                <DropdownMenuSeparator className="bg-gray-800" />

                <DropdownMenuItem asChild>
                  <Link href="/profile" className="flex items-center gap-2 cursor-pointer">
                    <User className="w-4 h-4" />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>

                {user?.role === 'ADMIN' && (
                  <DropdownMenuItem asChild>
                    <Link href="/admin/dashboard" className="flex items-center gap-2 cursor-pointer">
                      <Settings className="w-4 h-4" />
                      <span>Admin Panel</span>
                    </Link>
                  </DropdownMenuItem>
                )}

                <DropdownMenuSeparator className="bg-gray-800" />

                <DropdownMenuItem
                  onClick={handleLogout}
                  disabled={isLoggingOut}
                  className="flex items-center gap-2 cursor-pointer text-red-400 hover:text-red-300"
                >
                  <LogOut className="w-4 h-4" />
                  <span>{isLoggingOut ? 'Signing Out...' : 'Sign Out'}</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  )
}
