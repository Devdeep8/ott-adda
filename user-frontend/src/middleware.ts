import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

const PROTECTED_PATHS = ['/home', '/series', '/watch', '/subscribe', '/profile', '/admin']
const PUBLIC_PATHS = ['/login', '/register']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // Check for access token cookie
  const hasAccessToken = request.cookies.has('accessToken')

  // If no token and trying to access protected path → redirect to login
  if (!hasAccessToken && PROTECTED_PATHS.some(p => pathname.startsWith(p))) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // If token exists and trying to access auth pages → redirect to home
  if (hasAccessToken && PUBLIC_PATHS.some(p => pathname.startsWith(p))) {
    return NextResponse.redirect(new URL('/home', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|public).*)',
  ],
}
