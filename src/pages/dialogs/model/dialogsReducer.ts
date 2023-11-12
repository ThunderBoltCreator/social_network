import {DialogsState, MessageState} from 'app/store/config/store.model'
import {v4} from 'uuid'

export type DialogsActions = changeMessageText | sendMessage

const initialState: DialogsState = {
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

export const dialogsReducer = (state = initialState, action: DialogsActions): DialogsState => {
  switch (action.type) {
    case 'CHANGE-NEW-MESSAGE-TEXT': {
      return {...state, messageText: action.text}
    }
    case 'SEND-MESSAGE': {
      const newMessage: MessageState = {message: state.messageText, id: v4()}
      return {...state, messages: [...state.messages, newMessage]}
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