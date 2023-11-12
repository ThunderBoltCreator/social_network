import {$axios} from 'app/api/AxiosInstance'
import {AxiosResponse} from 'axios'
import {ProfileState} from 'pages/profile/model/profileReducer'

interface ProfileServiceModel {
  getProfile: (userId: string | number) => Promise<AxiosResponse<ProfileState>>
}

export const ProfileService: ProfileServiceModel = {
  getProfile(userId: string | number) {
    const res = $axios.get<ProfileState>(`/profile/${userId}`)
    return res
  }
}