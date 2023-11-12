export interface UsersState {
  users: UserT[]
  totalCount: number
  pageNumber: number
  pageSize: number
  isFetching: boolean
}

export interface UserT {
  name: string
  id: number
  uniqueUrlName: string | null
  photos: {
    small: string | null
    large: string | null
  }
  followed: boolean
  status: string | null
}

const initialState: UsersState = {
  users: [],
  totalCount: 0,
  pageNumber: 1,
  pageSize: 5,
  isFetching: false
}

export type UsersActions = SetUsers | SetTotalCount | SetCurrentPage | SetPageSize | SetIsFetching

export const usersReducer = (state = initialState, action: UsersActions) => {
  switch (action.type) {
    case 'SET-USERS':
      return {...state, users: action.payload.users}
    case 'SET-TOTAL-COUNT':
      return {...state, totalCount: action.payload.count}
    case 'SET-PAGE-NUMBER':
      return {...state, pageNumber: action.payload.pageNumber}
    case 'SET-PORTION':
      return {...state, pageSize: action.payload.pageSize}
    case 'SET-IS-FETCHING':
      return {...state, isFetching: action.payload.isFetching}
    default:
      return state
  }
}

export const setUsers = (users: UserT[]) => ({
  type: 'SET-USERS' as const,
  payload: {users}
})
type SetUsers = ReturnType<typeof setUsers>

export const setTotalCount = (count: number) => ({
  type: 'SET-TOTAL-COUNT' as const,
  payload: {count}
})
type SetTotalCount = ReturnType<typeof setTotalCount>

export const setCurrentPage = (pageNumber: number) => ({
  type: 'SET-PAGE-NUMBER' as const,
  payload: {pageNumber}
})
type SetCurrentPage = ReturnType<typeof setCurrentPage>

export const setPageSize = (pageSize: number) => ({
  type: 'SET-PORTION' as const,
  payload: {pageSize}
})
type SetPageSize = ReturnType<typeof setPageSize>

export const setIsFetching = (isFetching: boolean) => ({
  type: 'SET-IS-FETCHING' as const,
  payload: {isFetching}
})
type SetIsFetching = ReturnType<typeof setIsFetching>