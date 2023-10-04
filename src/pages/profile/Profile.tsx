import React, {FC} from 'react'
import {IProfilePage} from '../../redux/state'
import {MyPosts} from './MyPosts'

import s from './Profile.styled'
import {ProfileInfo} from './ProfileInfo'

interface IProfile {
  profileState: IProfilePage
}


export const Profile: FC<IProfile> = ({profileState}) => {

  return (
    <s.Profile>
      <ProfileInfo/>
      <MyPosts posts={profileState.posts}/>
    </s.Profile>
  )
}