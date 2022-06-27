import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({
    req,
    secret: process.env.JWT_SECRET,
    secureCookie:
      process.env.NEXTAUTH_URL?.startsWith("https://") ??
      !!process.env.VERCEL_URL,
  });

  const url = req.nextUrl.clone();
  const { pathname } = url;

  if (
    !token &&
    (pathname.includes("/api/auth") || pathname.includes("/auth"))
  ) {
    return NextResponse.next();
  } else if (!token && !pathname.includes("/auth")) {
    url.pathname = "/auth/signin";
    return NextResponse.redirect(url);
  }

  if (token && pathname === "/auth/signin") {
    url.pathname = "/";
    return NextResponse.redirect(url);
  } else {
    return NextResponse.next();
  }
}
