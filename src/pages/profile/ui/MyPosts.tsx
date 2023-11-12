import {PostState} from 'pages/profile/model/postsReducer'
import {Post} from 'pages/profile/ui/Post'
import React, {createRef} from 'react'
import {Button} from 'shared/button/Button'


export interface MyPostsProps {
  posts: PostState[]
  newPostText: string
  addPost: () => void
  changeNewPostText: (newText: string) => void
}

export function MyPosts({posts, newPostText, changeNewPostText, addPost}: MyPostsProps) {
  const inputRef = createRef<HTMLTextAreaElement>()

  const addPostCallback = () => {
    addPost()
    changeNewPostText('')
  }
  const onChangePostTextHandler = () => {
    if (inputRef.current) {
      changeNewPostText(inputRef.current.value)
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