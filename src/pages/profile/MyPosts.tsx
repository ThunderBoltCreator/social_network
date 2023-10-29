import {IPost} from 'app/redux/store.types'
import React, {createRef, FC} from 'react'
import {Button} from 'shared/button/Button'

import {Post} from './Post'


export interface IMyPosts {
  posts: IPost[]
  newPostText: string
  // addPost: (message: string) => void
  // changeNewPostText: (newText: string) => void
  // dispatch: (action: DispatchAction) => void
}

export const MyPosts: FC<IMyPosts> = ({posts, newPostText}) => {
  const inputRef = createRef<HTMLTextAreaElement>()

  const addPostCallback = () => {
    // dispatch(addPostAC())
  }
  const onChangePostTextHandler = () => {
    if (inputRef.current) {
      // dispatch(changeNewPostTextAC(inputRef.current.value))
    }
  }

  let error = true
  let clicked = true

  return (
    <div>
      <h3>My Posts</h3>
      <div>
        <textarea onChange={onChangePostTextHandler} value={newPostText} ref={inputRef}></textarea>
        <Button callback={addPostCallback}>New post</Button>
      </div>
      <div>
        {
          posts.map(p => (
            <Post key={p.id} message={p.message}/>
          ))
        }
      </div>
    </div>
  )
}