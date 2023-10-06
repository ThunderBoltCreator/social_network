import {IDialog, IMessage, IPost, IState} from './state.types'

const state: IState = {
  profilePage: {
    posts: [
      {id: 1, message: 'Hi'},
      {id: 2, message: 'How'},
      {id: 3, message: 'Are'},
      {id: 4, message: 'You'}
    ]
  },
  dialogsPage: {
    dialogs: [
      {id: 1, name: 'Dimych'},
      {id: 2, name: 'Andrey'},
      {id: 3, name: 'Sveta'},
      {id: 4, name: 'Viktor'},
      {id: 5, name: 'Valera'},
      {id: 6, name: 'Sasha'}
    ],
    messages: [
      {id: 1, message: 'Hi'},
      {id: 2, message: 'How'},
      {id: 3, message: 'Are'},
      {id: 4, message: 'You'}
    ]
  }
}

export const addPost = (message: string) => {
  const newPost = {id: 5, message: 'New Post'}

  state.profilePage.posts.push(newPost)
}

export default state