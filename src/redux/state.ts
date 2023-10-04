import {IDialog, IMessage, IPost} from './data.types'

export interface IState {
  profilePage: IProfilePage
  dialogsPage: IDialogsPage
}

export interface IProfilePage {
  posts: IPost[]
}

export interface IDialogsPage {
  dialogs: IDialog[]
  messages: IMessage[]
}

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

export default state