interface ContactsState {
  facebook: string | null
  website: string | null
  vk: string | null
  twitter: string | null
  instagram: string | null
  youtube: string | null
  github: string | null
  mainLink: string | null
}

export interface ProfileState {
  aboutMe: string | null
  contacts: ContactsState
  lookingForAJob: boolean | null
  lookingForAJobDescription: string | null
  fullName: string | null
  userId: number
  photos: {
    small: string | null
    large: string | null
  }
}

const initialState: ProfileState = {
  aboutMe: '',
  contacts: {
    facebook: null,
    github: null,
    instagram: null,
    mainLink: null,
    twitter: null,
    vk: null,
    website: null,
    youtube: null
  },
  fullName: '',
  photos: {
    small: null,
    large: null
  },
  lookingForAJobDescription: '',
  lookingForAJob: true,
  userId: 9999
}
type ProfileActions = SetProfile
export const profileReducer = (state = initialState, action: ProfileActions) => {
  switch (action.type) {
    case 'SET-PROFILE':
      return {
        ...action.payload,
        contacts: action.payload.contacts,
        photos: action.payload.photos
      }
    default:
      return state
  }
}

export const setProfile = (profile: ProfileState) => ({
  type: 'SET-PROFILE' as const,
  payload: {...profile}
})
type SetProfile = ReturnType<typeof setProfile>