import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/sonner'
import { AdminAuthProvider } from '@/context/AdminAuthContext'
import { AdminLayout } from '@/components/layout/AdminLayout'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'OTT Admin Panel',
  description: 'Admin dashboard for OTT Adda platform',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${inter.variable} font-sans antialiased bg-gray-950 text-white`}>
        <AdminAuthProvider>
          <AdminLayout>
            {children}
            <Toaster />
          </AdminLayout>
        </AdminAuthProvider>
      </body>
    </html>
  )
}
