import {DispatchType} from './store'

export interface IStore {
  getState: () => IState
  // addPost: () => void
  // changeNewPostText: (newText: string) => void
  subscribe: (observer: () => void) => void
  dispatch: DispatchType

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



