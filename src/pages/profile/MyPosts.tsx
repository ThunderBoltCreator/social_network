import React, {FC} from 'react'
import {Button} from '../../components/button/Button'
import {IPost} from '../../redux/data.types'

import {Post} from './Post'

import s from './Profile.styled'

export interface IMyPosts {
  posts: IPost[]
}

export const MyPosts: FC<IMyPosts> = ({posts}) => {

  return (
    <s.MyPosts>
      <h3>My Posts</h3>
      <div>
        <textarea></textarea>
        <Button>New post</Button>
      </div>
      <div>
        {
          posts.map(p => (
            <Post key={p.id} message={p.message}/>
          ))
        }
      </div>
    </s.MyPosts>
  )
}