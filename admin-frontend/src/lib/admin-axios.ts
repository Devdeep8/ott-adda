import axios from 'axios'
import { useRouter } from 'next/navigation'

const API_URL = process.env.NEXT_PUBLIC_ADMIN_API_URL || 'http://localhost:8003'

const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
})

// Response interceptor for 401 handling
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Remove auth tokens
      if (typeof window !== 'undefined') {
        // Redirect to login will be handled by middleware
        window.location.href = '/login'
      }
    }
    return Promise.reject(error)
  }
)

export default axiosInstance
