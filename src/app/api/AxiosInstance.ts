import axios from 'axios'

export const $axios = axios.create({
   baseURL: 'https://social-network.samuraijs.com/api/1.0',
   withCredentials: true,
   headers: {
      'Content-Type': 'application/json'
   }
})