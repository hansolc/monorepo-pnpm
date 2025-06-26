import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const loggedIn = request.cookies.get("token")?.value;

  const pathname = request.nextUrl.pathname;

  const isAuthPage = ["/login", "/signup"].some((path) =>
    pathname.startsWith(path)
  );
  const isAdminPath =
    pathname.startsWith("/admin") && !pathname.startsWith("/admin/login");

  // 로그인된 상태에서 로그인/회원가입 페이지 접근 시 리다이렉트
  if (loggedIn && isAuthPage) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (!loggedIn && isAdminPath) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login(.*)", "/signup(.*)", "/admin(.*)"],
};
