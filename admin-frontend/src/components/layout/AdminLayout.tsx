'use client'

import { AdminSidebar } from './AdminSidebar'

export function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-950">
      <AdminSidebar />
      <main className="ml-64 flex-1 p-6 text-white overflow-auto">
        {children}
      </main>
    </div>
  )
}
