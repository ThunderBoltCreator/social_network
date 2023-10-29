import React, {FC} from 'react'
import {ProfileInfo} from './ProfileInfo'

interface IProfile {
  // profilePage: IProfilePage
}


export const Profile: FC<IProfile> = () => {

  return (
    <div>
      Profile
      <ProfileInfo/>
      {/*<MyPosts*/}
      {/*  posts={profilePage.posts}*/}
      {/*  newPostText={profilePage.newPostText}*/}
      {/*  // addPost={addPost}*/}
      {/*  // changeNewPostText={changeNewPostText}*/}
      {/*  // dispatch={dispatch}*/}
      {/*/>*/}
    </div>
  )
}

// const Profile = styled.div`
//   img {
//     width: 100%;
//   }
// `
// const ProfileInfo = styled.div`
//   > .img-wrapper {
//     height: 300px;
//   }
//
//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     object-position: center;
//   }
// `