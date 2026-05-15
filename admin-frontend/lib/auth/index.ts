import { cookies } from "next/headers"
import api from "@/lib/axios"

export async function getCurrentUser() {
  try {
    const cookieStore = await cookies()

    const token = cookieStore.get("admin-token")?.value

    if (!token) return null

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