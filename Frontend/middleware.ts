import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  const isAuth = Boolean(token);
  const isOnAuthRoutes = request.nextUrl.pathname.startsWith("/auth") || request.nextUrl.pathname === "/_next";

  if (!isAuth) {
    // allow static assets and Next internals
    if (
      request.nextUrl.pathname.startsWith("/_next") ||
      request.nextUrl.pathname.startsWith("/public") ||
      request.nextUrl.pathname.startsWith("/favicon.ico")
    ) {
      return NextResponse.next();
    }
    // redirect unauthenticated to login app
    const loginUrl = new URL("http://localhost:5173/signin");
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|public).*)",
  ],
};


