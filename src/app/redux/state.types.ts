export interface IPost {
   id: number
   message: string
}

export interface IDialog {
   id: number
   name: string
}

export interface IMessage {
   id: number
   message: string
}

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