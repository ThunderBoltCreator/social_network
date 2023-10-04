import {FC} from 'react'

import s from './Dialogs.styled'

interface IMessageProps {
   message: string
}

export const Message: FC<IMessageProps> = ({message}) => {
   return (
      <s.Message>{message}</s.Message>
   )
}