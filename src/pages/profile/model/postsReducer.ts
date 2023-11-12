import {v4} from 'uuid'

export interface PostsState {
  posts: PostState[]
  newPostText: string
}

export interface PostState {
  id: string
  message: string
}

export type PostsActions = AddPost | ChangePostText

const initialState: PostsState = {
  posts: [
    {id: v4(), message: 'Hi'},
    {id: v4(), message: 'How'},
    {id: v4(), message: 'Are'},
    {id: v4(), message: 'You'}
  ],
  newPostText: ''
}

export const postsReducer = (state = initialState, action: PostsActions): PostsState => {
  switch (action.type) {
    case 'CHANGE-NEW-POST-TEXT': {
      return {...state, newPostText: action.text}
    }
    case 'ADD-POST': {
      const newPost = {id: v4(), message: state.newPostText}
      return {...state, posts: [...state.posts, newPost]}
    }
    default: {
      return state
    }
  }
}

export type AddPost = ReturnType<typeof addPost>
export type ChangePostText = ReturnType<typeof changeNewPostText>

export const addPost = () => ({type: 'ADD-POST' as const})
export const changeNewPostText = (text: string) => ({type: 'CHANGE-NEW-POST-TEXT' as const, text})