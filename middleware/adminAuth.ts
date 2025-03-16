import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function adminAuthMiddleware(request: NextRequest) {
  const isAdminPath = request.nextUrl.pathname.startsWith("/admin");
  const isLoginPath = request.nextUrl.pathname === "/admin/login";
  const adminSession = request.cookies.get("admin_session");

  if (isAdminPath && !isLoginPath && !adminSession) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  return NextResponse.next();
}
