import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  console.log("MIDDLEWARE -> process.env.JWT_SECRET: ", process.env.JWT_SECRET);
  console.log("MIDDLEWARE -> req: ", req);
  const token = await getToken({
    req,
    secret: process.env.JWT_SECRET,
    secureCookie:
      process.env.NEXTAUTH_URL?.startsWith("https://") ??
      !!process.env.VERCEL_URL,
  });

  const { pathname } = req.nextUrl;
  console.log("MIDDLEWARE -> pathname: ", pathname);
  console.log("MIDDLEWARE -> token: ", token);

  if (pathname.includes("/api/auth") || token) {
    return NextResponse.next();
  }

  if (!token && pathname !== "/auth/signin") {
    console.log("MIDLEWARE -> redirect to login");
    return NextResponse.redirect("/auth/signin");
  }
}
