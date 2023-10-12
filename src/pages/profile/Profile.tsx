import React, {FC, useState} from 'react'
import {IProfilePage} from '../../app/redux/state.types'
import {MyPosts} from './MyPosts'

import s from './Profile.styled'
import {ProfileInfo} from './ProfileInfo'

interface IProfile {
   profileState: IProfilePage
   addPost: (message: string) => void
}


export const Profile: FC<IProfile> = ({profileState, addPost}) => {

   const [title, setTitle] = useState('title1')
   setTitle(prevState => 'title2')
   console.log(title)

   return (
      <s.Profile>
         <ProfileInfo/>
         <MyPosts posts={profileState.posts} addPost={addPost}/>
      </s.Profile>
   )
}