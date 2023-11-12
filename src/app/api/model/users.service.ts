import {$axios} from 'app/api/AxiosInstance'
import type {UserT} from 'pages/users/model/usersReducer'

interface UsersPageApi {
  items: UserT[]
  totalCount: number
  error: never
}

interface UsersApi {
  getUsers: (pageNumber: number, portion: number) => Promise<UsersPageApi>
}

export const UsersService: UsersApi = {
  async getUsers(pageNumber, portion) {
    const {data} = await $axios.get<UsersPageApi>(`/users?count=${portion}&page=${pageNumber}`)
    
    return data
  }
}