import {v4} from 'uuid'
import {DialogsActions, dialogsReducer} from './dialogsReducer'
import {ProfileActions, profileReducer} from './profileReducer'
import {IMessage, IStore} from './store.types'

export type DispatchAction = ProfileActions | DialogsActions

const store: IStore = {
  _state: {
    profilePage: {
      posts: [
        {id: v4(), message: 'Hi'},
        {id: v4(), message: 'How'},
        {id: v4(), message: 'Are'},
        {id: v4(), message: 'You'}
      ],
      newPostText: ''
    },
    dialogsPage: {
      dialogs: [
        {id: v4(), name: 'Dimych'},
        {id: v4(), name: 'Andrey'},
        {id: v4(), name: 'Sveta'},
        {id: v4(), name: 'Viktor'},
        {id: v4(), name: 'Valera'},
        {id: v4(), name: 'Sasha'}
      ],
      messages: [
        {id: v4(), message: 'Hi'},
        {id: v4(), message: 'How'},
        {id: v4(), message: 'Are'},
        {id: v4(), message: 'You'}
      ],
      messageText: ''
    }

  },
  _callSubscriber() {
  },

  subscribe(observer: () => void) {
    this._callSubscriber = observer
  },
  getState() {
    return this._state
  },

  addPost() {
    const newPost = {id: v4(), message: this._state.profilePage.newPostText}

    this._state.profilePage.posts.push(newPost)

    this._callSubscriber()
  },
  changeNewPostText(newText: string) {
    this._state.profilePage.newPostText = newText

    this._callSubscriber()
  },

  changeMessageText(newText: string) {
    this._state.dialogsPage.messageText = newText
  },
  sendMessage() {
    const newMessage: IMessage = {message: this._state.dialogsPage.messageText, id: v4()}
    this._state.dialogsPage.messages.push(newMessage)
  },

  dispatch(action: DispatchAction) {
    if (action.type === 'ADD-POST' || action.type === 'CHANGE-NEW-POST-TEXT') {
      profileReducer(this._state.profilePage, action)
    }
    if (action.type === 'SEND-MESSAGE' || action.type === 'CHANGE-NEW-MESSAGE-TEXT')
      dialogsReducer(this._state.dialogsPage, action)

    this._callSubscriber()
  }
}


export default store