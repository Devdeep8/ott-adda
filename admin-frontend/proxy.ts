import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const response = NextResponse.next();
  // Pass current pathname as a header so not-found.tsx can read it
  response.headers.set("x-invoke-path", request.nextUrl.pathname);
  return response;
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};