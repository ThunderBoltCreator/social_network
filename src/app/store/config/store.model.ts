import store from 'app/store/config/store'

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export interface DialogsState {
  dialogs: DialogState[]
  messages: MessageState[]
  messageText: string
}


export interface DialogState {
  id: string
  name: string
}

export interface MessageState {
  id: string
  message: string
}
