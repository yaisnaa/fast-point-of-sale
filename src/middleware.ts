import { NextRequest } from "next/server";
import { UpdateSession } from "./lib/supabase/middleware";
//ini yang bakal dieksekusi pada pertama kali web dijalankan
export async function middleware(request: NextRequest) {
  return await UpdateSession(request);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)&).*)",
  ],
};
