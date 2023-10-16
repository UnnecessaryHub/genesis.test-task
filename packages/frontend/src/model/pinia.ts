import axios             from 'axios'
import jwtDecode         from 'jwt-decode'
import { defineStore }   from 'pinia'

import { myAxios }       from '../shared/http.ts'
import { Entities }      from '../shared/types.ts'
import { entityLocales } from '../shared/script.ts'

interface IData {
  id: number
  entity: string
  name: string
}
interface IState {
  data: IData[]
  isTokenValid: boolean
}
export const useMainStore = defineStore('main', {
  state: (): IState => ({
    data: [],
    isTokenValid: false
  }),
  actions: {
    async fetchData(entity: Entities, name: string) {
      try {
        const { data } = await myAxios.post(
          import.meta.env.VITE_BASE_URL + entity,
          [{ name }]
        )
        this.data.push({
          id: data.id,
          entity: entityLocales[entity],
          name: name || 'Неизвестно'
        })
      } catch (error) {
        console.error(error)
      }
    },
    async authorize(clientId: string) {
      try {
        const res = await axios.post(import.meta.env.VITE_BASE_URL + 'auth', {
          clientId
        })
        localStorage.setItem('access_token', res.data.access_token)
        myAxios.defaults.headers.common.Authorization = `Bearer ${res.data.access_token}`
        this.isTokenValid = true
      } catch (error) {
        console.error(error)
      }
    },
    checkToken() {
      const token = localStorage.getItem('access_token')
      if (token) {
        const decodedToken: any = jwtDecode(token)
        const expirationDate = decodedToken.exp * 1000
        const currentTime = Date.now()
        if (expirationDate < currentTime) {
          this.isTokenValid = false
        } else {
          this.isTokenValid = true
        }
      }
    }
  }
})
