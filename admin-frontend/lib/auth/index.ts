import { cookies } from "next/headers"
import api from "@/lib/axios"

export async function getCurrentUser() {
  try {
    const cookieStore = await cookies()

    const token = cookieStore.get("adminToken")?.value

    if (!token) {
      // Check localStorage for client-side fallback (won't work server-side)
      return null
    }

    const res = await api.get("/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    return res.data.data
  } catch (error ) {
    console.log('error :>> ', error);
    return null
  }
}