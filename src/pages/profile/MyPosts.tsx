import React, {createRef, FC} from 'react'
import {IPost} from '../../app/redux/store.types'
import {Button} from '../../components/button/Button'

import {Post} from './Post'

import s from './Profile.styled'

export interface IMyPosts {
  posts: IPost[]
  addPost: (message: string) => void
  newPostText: string
  changeNewPostText: (newText: string) => void

}

export const MyPosts: FC<IMyPosts> = ({posts, addPost, changeNewPostText, newPostText}) => {
  const inputRef = createRef<HTMLTextAreaElement>()

  const addPostCallback = () => {
    if (inputRef.current) {
      addPost(newPostText)
      changeNewPostText('')
    }
  }
  const onChangePostTextHandler = () => {
    if (inputRef.current) {
      changeNewPostText(inputRef.current.value)
    }
  }

  let error = true
  let clicked = true

  return (
    <s.MyPosts>
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
    </s.MyPosts>
  )
}