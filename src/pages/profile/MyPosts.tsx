import React, {createRef, FC, useEffect, useRef} from 'react'
import {Button} from '../../components/button/Button'
import {IPost} from '../../app/redux/state.types'

import {Post} from './Post'

import s from './Profile.styled'

export interface IMyPosts {
   posts: IPost[]
   addPost: (message: string) => void
}

export const MyPosts: FC<IMyPosts> = ({posts, addPost}) => {
   const inputRef = useRef<HTMLTextAreaElement>(null)

   const addPostCallback = () => {
      if (inputRef.current) {
         addPost(inputRef.current.value)
      }
   }

   return (
      <s.MyPosts>
         <h3>My Posts</h3>

         <div id={'refdiv'} ref={() => {
            debugger
            console.log('pashalka')
         }}
         >

            <textarea ref={inputRef}></textarea>
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