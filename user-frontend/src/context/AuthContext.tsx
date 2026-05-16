'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import { authService } from '@/services/auth.service'
import type { User, RegisterPayload, LoginPayload } from '@/types/auth.types'

interface AuthContextType {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<void>
  register: (name: string, email: string, password: string) => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()

  // Restore session on mount
  useEffect(() => {
    const restoreSession = async () => {
      try {
        const response = await authService.getMe()
        if (response.status === 200 && response.data?.data?.user) {
          setUser(response.data.data.user)
          setIsAuthenticated(true)
        }
      } catch (error) {
        setUser(null)
        setIsAuthenticated(false)
      } finally {
        setIsLoading(false)
      }
    }

    restoreSession()
  }, [])

  const login = async (email: string, password: string) => {
    try {
      const response = await authService.login({ email, password })
      const userData = response.data?.data?.user
      if (userData) {
        setUser(userData)
        setIsAuthenticated(true)
        router.push('/home')
      }
    } catch (error) {
      setUser(null)
      setIsAuthenticated(false)
      throw error
    }
  }

  const register = async (name: string, email: string, password: string) => {
    try {
      const response = await authService.register({ name, email, password })
      const userData = response.data?.data?.user
      if (userData) {
        setUser(userData)
        setIsAuthenticated(true)
        router.push('/home')
      }
    } catch (error) {
      setUser(null)
      setIsAuthenticated(false)
      throw error
    }
  }

  const logout = async () => {
    try {
      await authService.logout()
      setUser(null)
      setIsAuthenticated(false)
      router.push('/login')
    } catch (error) {
      setUser(null)
      setIsAuthenticated(false)
      router.push('/login')
    }
  }

  const value: AuthContextType = {
    user,
    isLoading,
    isAuthenticated,
    login,
    register,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
