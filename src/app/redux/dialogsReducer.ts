import {v4} from 'uuid'
import {IDialogsPage, IMessage} from './store.types'

export type DialogsActions = changeMessageText | sendMessage

const initialState: IDialogsPage = {
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

export const dialogsReducer = (state = initialState, action: DialogsActions): IDialogsPage => {
  switch (action.type) {
    case 'CHANGE-NEW-MESSAGE-TEXT': {
      state.messageText = action.text
      return state
    }
    case 'SEND-MESSAGE': {
      const newMessage: IMessage = {message: state.messageText, id: v4()}
      state.messages.push(newMessage)
      return state
    }
    default: {
      return state
    }
  }
}

export type changeMessageText = ReturnType<typeof changeMessageTextAC>
export type sendMessage = ReturnType<typeof sendMessageAC>

export const changeMessageTextAC = (text: string) => ({type: 'CHANGE-NEW-MESSAGE-TEXT' as const, text})
export const sendMessageAC = () => ({type: 'SEND-MESSAGE' as const})