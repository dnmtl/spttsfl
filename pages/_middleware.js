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
    return NextResponse.redirect("/auth/signin");
  }

  if (token && pathname === "/auth/signin") {
    return NextResponse.redirect("/");
  } else {
    return NextResponse.next();
  }
}
