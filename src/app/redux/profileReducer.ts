import {v4} from 'uuid'
import {IProfilePage} from './store.types'

export type ProfileActions = AddPost | ChangePostText

const initialState: IProfilePage = {
  posts: [
    {id: v4(), message: 'Hi'},
    {id: v4(), message: 'How'},
    {id: v4(), message: 'Are'},
    {id: v4(), message: 'You'}
  ],
  newPostText: ''
}

export const profileReducer = (state = initialState, action: ProfileActions): IProfilePage => {
  switch (action.type) {
    case 'CHANGE-NEW-POST-TEXT': {
      state.newPostText = action.text

      return state
    }
    case 'ADD-POST': {
      const newPost = {id: v4(), message: state.newPostText}
      state.posts.push(newPost)
      return state
    }
    default: {
      return state
    }
  }
}

export type AddPost = ReturnType<typeof addPostAC>
export type ChangePostText = ReturnType<typeof changeNewPostTextAC>

export const addPostAC = () => ({type: 'ADD-POST' as const})
export const changeNewPostTextAC = (text: string) => ({type: 'CHANGE-NEW-POST-TEXT' as const, text})