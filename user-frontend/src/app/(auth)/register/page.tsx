'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Eye, EyeOff, Loader2, Check, X } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'
import { authService } from '@/services/auth.service'
import { useAuth } from '@/context/AuthContext'

export default function RegisterPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const router = useRouter()
  const { register } = useAuth()

  const validateField = (field: string, value: string) => {
    const newErrors = { ...errors }

    switch (field) {
      case 'name':
        if (!value.trim()) {
          newErrors.name = 'Name is required'
        } else {
          delete newErrors.name
        }
        break

      case 'email':
        if (!value.trim()) {
          newErrors.email = 'Email is required'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          newErrors.email = 'Invalid email format'
        } else {
          delete newErrors.email
        }
        break

      case 'password':
        if (!value) {
          newErrors.password = 'Password is required'
        } else if (value.length < 8) {
          newErrors.password = 'Password must be at least 8 characters'
        } else {
          delete newErrors.password
        }
        if (confirmPassword && value !== confirmPassword) {
          newErrors.confirmPassword = 'Passwords do not match'
        } else if (confirmPassword && value === confirmPassword) {
          delete newErrors.confirmPassword
        }
        break

      case 'confirmPassword':
        if (!value) {
          newErrors.confirmPassword = 'Confirm password is required'
        } else if (value !== password) {
          newErrors.confirmPassword = 'Passwords do not match'
        } else {
          delete newErrors.confirmPassword
        }
        break

      default:
        break
    }

    setErrors(newErrors)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Final validation
    const newErrors: Record<string, string> = {}
    if (!name.trim()) newErrors.name = 'Name is required'
    if (!email.trim()) newErrors.email = 'Email is required'
    if (!password) newErrors.password = 'Password is required'
    if (!confirmPassword) newErrors.confirmPassword = 'Confirm password is required'
    if (password && password.length < 8) newErrors.password = 'Password must be at least 8 characters'
    if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match'

    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return

    setIsLoading(true)
    try {
      await register(name, email, password)
      toast.success('Account created!')
    } catch (err: any) {
      const errorMsg = err?.response?.data?.message || err?.message || 'Registration failed'
      setErrors({ submit: errorMsg })
      toast.error(errorMsg)
    } finally {
      setIsLoading(false)
    }
  }

  const passwordMatch = password && confirmPassword && password === confirmPassword
  const passwordsLengthValid = password && password.length >= 8

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-gray-900 border-gray-800 rounded-2xl">
        <CardHeader className="flex flex-col items-center text-center pb-6">
          <h1 className="text-3xl font-bold text-red-600 mb-2">OTT ADDA</h1>
          <p className="text-gray-400 text-sm">Create your account to start watching</p>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Field */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-300">
                Full Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value)
                  validateField('name', e.target.value)
                }}
                disabled={isLoading}
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 rounded-lg"
              />
              {errors.name && (
                <p className="text-red-400 text-xs flex items-center gap-1">
                  <X className="h-3 w-3" /> {errors.name}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-300">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  validateField('email', e.target.value)
                }}
                disabled={isLoading}
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 rounded-lg"
              />
              {errors.email && (
                <p className="text-red-400 text-xs flex items-center gap-1">
                  <X className="h-3 w-3" /> {errors.email}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-300">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="At least 8 characters"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                    validateField('password', e.target.value)
                  }}
                  disabled={isLoading}
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 rounded-lg pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={isLoading}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-400 text-xs flex items-center gap-1">
                  <X className="h-3 w-3" /> {errors.password}
                </p>
              )}
              {passwordsLengthValid && !errors.password && (
                <p className="text-green-400 text-xs flex items-center gap-1">
                  <Check className="h-3 w-3" /> Password meets requirements
                </p>
              )}
            </div>

            {/* Confirm Password Field */}
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-gray-300">
                Confirm Password
              </Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value)
                    validateField('confirmPassword', e.target.value)
                  }}
                  disabled={isLoading}
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 rounded-lg pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  disabled={isLoading}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-400 text-xs flex items-center gap-1">
                  <X className="h-3 w-3" /> {errors.confirmPassword}
                </p>
              )}
              {passwordMatch && !errors.confirmPassword && (
                <p className="text-green-400 text-xs flex items-center gap-1">
                  <Check className="h-3 w-3" /> Passwords match
                </p>
              )}
            </div>

            {/* Submit Error */}
            {errors.submit && (
              <div className="text-red-400 text-sm bg-red-900/20 p-3 rounded-lg">
                {errors.submit}
              </div>
            )}

            {/* Create Account Button */}
            <Button
              type="submit"
              disabled={isLoading || Object.keys(errors).length > 0}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg py-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating account...
                </>
              ) : (
                'Create Account'
              )}
            </Button>

            {/* Login Link */}
            <p className="text-center text-gray-400 text-sm">
              Already have an account?{' '}
              <Link href="/login" className="text-red-500 hover:text-red-400 font-semibold">
                Sign in
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
