import {DispatchAction} from './store'

export interface IStore {
  getState: () => IState
  addPost: () => void
  changeNewPostText: (newText: string) => void
  subscribe: (observer: () => void) => void
  dispatch: (action: DispatchAction) => void
  changeMessageText: (newText: string) => void
  sendMessage: () => void

  _state: IState
  _callSubscriber: () => void
}

export interface IState {
  profilePage: IProfilePage
  dialogsPage: IDialogsPage
}

export interface IProfilePage {
  posts: IPost[]
  newPostText: string
}

export interface IDialogsPage {
  dialogs: IDialog[]
  messages: IMessage[]
  messageText: string
}

export interface IPost {
  id: string
  message: string
}

export interface IDialog {
  id: string
  name: string
}

export interface IMessage {
  id: string
  message: string
}



