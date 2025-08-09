import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const pathname = req.nextUrl.pathname;

  // 로그인/회원가입 페이지는 예외
  if (pathname.startsWith("/(auth)")) return NextResponse.next();

  // 보호가 필요한 경로 예: /dashboard
  if (pathname.startsWith("/dashboard") && !token) {
    const url = new URL("/(auth)/login", req.url);
    url.searchParams.set("next", pathname);
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
