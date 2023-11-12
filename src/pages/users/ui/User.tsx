import type {UserT} from 'pages/users/model/usersReducer'
import {Link} from 'react-router-dom'
import avatar from 'shared/images/avatar.png'

type UserUI = Omit<UserT, 'uniqueUrlName'>

interface UserProps extends UserUI {
}

export function User({name, status, photos, followed, id}: UserProps) {
  // const photo = photos.small ? photos.small : photos.large ? photos.large : avatar

  return (
    <div className="flex gap-5">
      <div className="basis-28 rounded-full border overflow-hidden">
        <Link to={`/profile/${id}`}>
          <img className="" src={photos.small || photos.large || avatar} alt="avatar"/>
        </Link>
      </div>
      <div className="w-full flex justify-between border rounded-2xl px-4">
        <div className="flex flex-col justify-around">
          <p>{name}</p>
          <p>{status}</p>
        </div>
        <div className="flex flex-col justify-around">
          <p>location</p>
          <button>{followed ? 'unfollow' : 'follow'}</button>
        </div>
      </div>
    </div>
  )
}