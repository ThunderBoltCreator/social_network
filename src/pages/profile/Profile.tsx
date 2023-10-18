import {IProfilePage} from 'app/redux/store.types'
import React, {FC} from 'react'
import {MyPosts} from './MyPosts'

import s from './Profile.styled'
import {ProfileInfo} from './ProfileInfo'

interface IProfile {
  profilePage: IProfilePage
}


export const Profile: FC<IProfile> = ({profilePage}) => {

  return (
    <s.Profile>
      <ProfileInfo/>
      <MyPosts
        posts={profilePage.posts}
        newPostText={profilePage.newPostText}
        // addPost={addPost}
        // changeNewPostText={changeNewPostText}
        dispatch={dispatch}
      />
    </s.Profile>
  )
}