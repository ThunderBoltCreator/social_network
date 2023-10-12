import {v4} from 'uuid'
import {IStore} from './store.types'

export type DispatchType = (action: DispatchAction) => void

export type DispatchAction = AddPostActionType | ChangePostText

export type AddPostActionType = {
  type: 'ADD-POST'
  payload: {
    newPost: string
  }
}
export type ChangePostText = {
  type: 'CHANGE-NEW-POST-TEXT',
  payload: {
    changedText: string
  }
}

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
      ]
    }

  },
  getState() {
    return this._state
  },
  // addPost() {
  //   const newPost = {id: v4(), message: this._state.profilePage.newPostText}
  //
  //   this._state.profilePage.posts.push(newPost)
  //
  //   this._callSubscriber()
  // },
  // changeNewPostText(newText: string) {
  //   this._state.profilePage.newPostText = newText
  //
  //   this._callSubscriber()
  // },
  _callSubscriber() {
  },
  subscribe(observer: () => void) {
    this._callSubscriber = observer
  },
  dispatch(action) {
    if (action.type === 'CHANGE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.payload.changedText

      this._callSubscriber()
    } else if (action.type === 'ADD-POST') {
      const newPost = {id: v4(), message: this._state.profilePage.newPostText}
      this._state.profilePage.posts.push(newPost)

      this._callSubscriber()
    }
  }
}


export default store