import React, {FC} from 'react'

interface IPost {
  message: string
}

export const Post: FC<IPost> = ({message}) => {
  return (
    <div>
      {message}
    </div>
  )
}