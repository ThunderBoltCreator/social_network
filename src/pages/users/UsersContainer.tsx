import {UsersService} from 'app/api/model/users.service'
import type {RootState} from 'app/store/config/store.model'
import {setCurrentPage, setIsFetching, setTotalCount, setUsers} from 'pages/users/model/usersReducer'
import React from 'react'
import {connect} from 'react-redux'
import type {UserT} from './model/usersReducer'
import {Users} from './ui/Users'

interface UsersST {
  users: UserT[]
  totalCount: number
  currentPage: number
  pageSize: number
  isFetching: boolean
}

interface MapDispatchPT {
  setUsers: (data: UserT[]) => void
  setTotalCount: (count: number) => void
  setCurrentPage: (page: number) => void
  setIsFetching: (isFetch: boolean) => void
}

type UsersProps = UsersST & MapDispatchPT

class UsersContainer extends React.Component<UsersProps, any> {
  componentDidMount() {
    this.props.setIsFetching(true)
    UsersService.getUsers(1, this.props.pageSize)
      .then(res => {
        console.log('response fetch Users Page', res)
        if (res?.items) {
          this.props.setUsers(res.items)
        }
        if (res?.totalCount) {
          this.props.setTotalCount(res.totalCount)
        }
        this.props.setIsFetching(false)
      })
  }

  onPageChanged = (page: number) => {
    this.props.setIsFetching(true)
    this.props.setCurrentPage(page)
    UsersService.getUsers(page, this.props.pageSize)
      .then(res => {
        this.props.setUsers(res.items)
        this.props.setIsFetching(false)
        console.log(res)
      })
  }

  render() {
    const pages = Math.ceil(this.props.totalCount / 5)
    return (
      <>
        <Users
          isFetching={this.props.isFetching}
          users={this.props.users}
          pagesCount={pages}
          setCurrentPage={this.onPageChanged}
          currentPage={this.props.currentPage}
        />
      </>
    )
  }
}

const mapStateToProps = ({usersPage}: RootState) => ({
  users: usersPage.users,
  totalCount: usersPage.totalCount,
  currentPage: usersPage.pageNumber,
  pageSize: usersPage.pageSize,
  isFetching: usersPage.isFetching
})


const dispatch = {
  setUsers, setTotalCount, setCurrentPage, setIsFetching
}

export default connect<UsersST, MapDispatchPT, any, RootState>(mapStateToProps, dispatch)(UsersContainer)