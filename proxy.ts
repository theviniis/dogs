import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const publicRoutes = [
  '/',
  '/auth/signin',
  '/auth/signup',
  '/auth/password/lost',
  '/auth/password/reset',
]

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Define public routes (routes that don't require authentication)
  const isPublicRoute = publicRoutes.includes(pathname)

  // Allow access to public routes
  if (isPublicRoute) {
    return NextResponse.next()
  }

  // Get JWT token from cookies
  const token = request.cookies.get('token')?.value

  // Redirect to signin if no token found and trying to access protected route
  if (!token) {
    return NextResponse.redirect(new URL('/api/auth/signout', request.url))
  }

  // Token exists, allow access
  return NextResponse.next()
}

// Configure which routes the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes - optional, remove if you want to protect API routes too)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    // '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
