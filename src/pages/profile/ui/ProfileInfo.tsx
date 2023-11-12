import clsx from 'clsx'
import {ProfileState} from 'pages/profile/model/profileReducer'
import React from 'react'
import avatar from 'shared/images/avatar.png'

interface ProfileHeader {
  className?: string
  profile: ProfileState
}

export function ProfileInfo({className = '', profile}: ProfileHeader) {
  const rootStyles = clsx(className, 'flex gap-4')
  const photo = profile.photos.large || profile.photos.small || avatar

  return (
    <div className={rootStyles}>
      <div>
        <img src={photo} alt=""/>
      </div>
      <div>
        <ul>
          <li className="text-2xl font-bold mb-1.5">{profile.fullName}</li>
          <li className="mb-1">{profile.aboutMe}</li>
          <li>Contacts:
            <ul>
              <li>facebook: {profile.contacts.facebook}</li>
              <li>twitter: {profile.contacts.twitter}</li>
              <li>vk: {profile.contacts.vk}</li>
              <li>instagram: {profile.contacts.instagram}</li>
              <li>youtube: {profile.contacts.youtube}</li>
              <li>website: {profile.contacts.website}</li>
              <li>mainLink: {profile.contacts.mainLink}</li>
              <li>github: {profile.contacts.github}</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}