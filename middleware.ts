import { NextResponse } from 'next/server'
import { decrypt } from '@/lib/session'

export async function middleware(request) {
  const session = request.cookies.get('session')
  const isAuthPage = request.nextUrl.pathname === '/login' || 
                    request.nextUrl.pathname === '/register'

  // If user has a valid session
  if (session) {
    try {
      const payload = await decrypt(session.value)
      if (payload) {
        // If trying to access login/register pages while logged in
        if (isAuthPage) {
          return NextResponse.redirect(new URL('/home', request.url))
        }
      }
    } catch {
      // Invalid session, continue with normal flow
    }
  }

  // Protect routes that should require authentication
  if (request.nextUrl.pathname.startsWith('/home') || 
      request.nextUrl.pathname.startsWith('/dashboard')) {
    
    if (!session) {
      return NextResponse.redirect(new URL('/login', request.url))
    }

    try {
      const payload = await decrypt(session.value)
      if (!payload) {
        return NextResponse.redirect(new URL('/login', request.url))
      }
    } catch {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/home/:path*', 
    '/dashboard/:path*',
    '/login',
    '/register'
  ]
} 