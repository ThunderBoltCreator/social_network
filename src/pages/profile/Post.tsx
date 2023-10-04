import React from 'react'
import {FC} from 'react'

import s from './Profile.styled'

interface IPost {
   message: string
}

export const Post: FC<IPost> = ({message}) => {
   return (
      <s.Post>
         {message}
      </s.Post>
   )
}