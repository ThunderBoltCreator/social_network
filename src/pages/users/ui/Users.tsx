import {UserT} from 'pages/users/model/usersReducer'
import React from 'react'
import {Pagination} from 'shared/paginate/Pagination'
import {Spinner} from 'shared/preloader/Preloader'
import {User} from './User'

interface UsersProps {
  setCurrentPage: (page: number) => void
  pagesCount: number
  currentPage: number
  users: UserT[]
  isFetching: boolean
}

export function Users({setCurrentPage, pagesCount, currentPage, users, isFetching}: UsersProps) {
  return (
    <>
      {isFetching ? (
        <div className="flex w-full h-full items-center justify-center">
          <Spinner/>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {users.map(u => (
            <User
              key={u.id}
              id={u.id}
              name={u.name}
              status={u.status}
              followed={u.followed}
              photos={u.photos}
            />
          ))}
          <Pagination
            countPage={pagesCount}
            currentPage={currentPage}
            onClick={setCurrentPage}
          />
        </div>
      )
      }

    </>
  )
}