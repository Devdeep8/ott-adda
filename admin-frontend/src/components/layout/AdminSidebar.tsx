'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import {
  LayoutDashboard,
  Film,
  PlayCircle,
  Upload,
  Grid,
  Users,
  LogOut,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import axiosInstance from '@/lib/admin-axios'
import { toast } from 'sonner'

const navItems = [
  { href: '/', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/series', label: 'Series', icon: Film },
  { href: '/episodes', label: 'Episodes', icon: PlayCircle },
  { href: '/upload', label: 'Upload', icon: Upload },
  { href: '/categories', label: 'Categories', icon: Grid },
  { href: '/users', label: 'Users', icon: Users },
]

export function AdminSidebar() {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = async () => {
    try {
      await axiosInstance.post('/api/v1/auth/logout')
      router.push('/login')
    } catch (error) {
      console.error('Logout failed:', error)
      toast.error('Logout failed')
    }
  }

  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-gray-900 border-r border-gray-800 flex flex-col">
      {/* Logo */}
      <div className="px-6 py-8 border-b border-gray-800">
        <h1 className="text-2xl font-bold">
          <span className="text-red-600">OTT ADDA</span>
          <span className="text-gray-400 text-sm ml-2">ADMIN</span>
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-medium ${
                isActive
                  ? 'bg-red-600/20 text-red-400 border-l-2 border-red-600'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>

      {/* Sign Out */}
      <div className="px-4 py-4 border-t border-gray-800">
        <Button
          onClick={handleLogout}
          variant="ghost"
          className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-red-600/10"
        >
          <LogOut className="w-5 h-5 mr-3" />
          Sign Out
        </Button>
      </div>
    </div>
  )
}
