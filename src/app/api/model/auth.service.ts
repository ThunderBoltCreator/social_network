import {$axios} from "../AxiosInstance";

export const authService = {
   async getAuthMe() {
      return await $axios.get('/auth/me')
   }
}