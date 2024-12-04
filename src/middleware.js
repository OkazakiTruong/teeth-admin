import { getCookie, hasCookie } from "cookies-next";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
export function middleware(request) {
  const pathName = new URL(request.url).pathname;
  console.log(hasCookie("isLogin"));
  if (!getCookie("isLogin", { cookies }) && pathName !== "/dang-nhap") {
    return NextResponse.redirect(new URL("/dang-nhap", request.url));
  } else {
    return NextResponse.next();
  }
}
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|icon|img|loading).*)",
  ],
};
