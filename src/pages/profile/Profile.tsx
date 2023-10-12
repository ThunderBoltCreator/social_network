import React, {FC} from 'react'
import {IProfilePage} from '../../app/redux/store.types'
import {MyPosts} from './MyPosts'

import s from './Profile.styled'
import {ProfileInfo} from './ProfileInfo'

interface IProfile {
  profileState: IProfilePage
  addPost: (message: string) => void
  changeNewPostText: (newText: string) => void
}


export const Profile: FC<IProfile> = ({profileState, addPost, changeNewPostText}) => {

  return (
    <s.Profile>
      <ProfileInfo/>
      <MyPosts posts={profileState.posts} addPost={addPost} newPostText={profileState.newPostText}
               changeNewPostText={changeNewPostText}/>
    </s.Profile>
  )
}