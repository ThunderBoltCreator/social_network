import {FC} from 'react'

interface IMessageProps {
  message: string
}

export const Message: FC<IMessageProps> = ({message}) => {
  return (
    <div>{message}</div>
  )
}