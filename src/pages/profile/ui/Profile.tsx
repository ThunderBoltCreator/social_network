import {PostState} from 'pages/profile/model/postsReducer'
import {ProfileState} from 'pages/profile/model/profileReducer'
import {Cover} from 'pages/profile/ui/Cover'
import {MyPosts} from 'pages/profile/ui/MyPosts'
import {ProfileInfo} from 'pages/profile/ui/ProfileInfo'
import React from 'react'

interface ProfileProps {
  posts: PostState[]
  newPostText: string
  profile: ProfileState
  addPost: () => void
  changeNewPostText: (text: string) => void
}


export function Profile({posts, newPostText, changeNewPostText, addPost, profile}: ProfileProps) {

  return (
    <>
      {/*todo COVER*/}
      <Cover/>
      <ProfileInfo profile={profile} className=""/>
      <MyPosts
        posts={posts}
        newPostText={newPostText}
        addPost={addPost}
        changeNewPostText={changeNewPostText}
      />
    </>
  )
}
