import axios from 'axios'

const defaultHeaders: Record<string, string> = {}

if (localStorage.getItem('access_token')) {
  defaultHeaders.Authorization = `Bearer ${localStorage.getItem(
    'access_token'
  )}`
}
export const myAxios = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: defaultHeaders
})
