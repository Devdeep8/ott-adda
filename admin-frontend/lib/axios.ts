import axios from "axios";

export const baseURL =
  typeof window === "undefined"
    ? process.env.INTERNAL_API_URL
    : process.env.NEXT_PUBLIC_API_URL;

const api = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    // Add auth token from localStorage if available
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('admin_token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
    }
    return config
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      if (typeof window !== "undefined") {
        // Clear auth tokens
        localStorage.removeItem('admin_token')
        localStorage.removeItem('admin_user')
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  }
);

export default api;
export { api as adminAxios };