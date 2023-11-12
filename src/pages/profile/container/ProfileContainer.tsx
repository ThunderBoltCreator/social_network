import {ProfileService} from 'app/api/model/profile.service'
import type {RootState} from 'app/store/config/store.model'
import type {PostState} from 'pages/profile/model/postsReducer'
import {addPost, changeNewPostText} from 'pages/profile/model/postsReducer'
import type {ProfileState} from 'pages/profile/model/profileReducer'
import {setProfile} from 'pages/profile/model/profileReducer'
import {Profile} from 'pages/profile/ui/Profile'
import {Component} from 'react'
import {connect} from 'react-redux'
import {RouteComponentProps, withRouter} from 'react-router-dom'

interface StatePT {
  posts: PostState[]
  newPostText: string
  profile: ProfileState
}

interface DispatchPT {
  addPost: () => void
  changeNewPostText: (text: string) => void
  setProfile: (profile: ProfileState) => void
}

type ProfileContainerProps = StatePT & DispatchPT & RouteComponentProps<{ id: string }>

class ProfileContainer extends Component<ProfileContainerProps> {
  componentDidMount() {
    const userId = this.props.match.params.id || 1034
    ProfileService.getProfile(userId)
      .then(res => {
        this.props.setProfile(res.data)
      })
      .catch(e => {
        console.log(e)
        console.error(e)
      })
  }

  render() {
    console.log('profile', this.props.profile)
    return (
      <>
        <Profile
          posts={this.props.posts}
          newPostText={this.props.newPostText}
          profile={this.props.profile}
          addPost={this.props.addPost}
          changeNewPostText={this.props.changeNewPostText}/>
      </>
    )
  }
}


const mapStateToProps = ({profilePage}: RootState) => ({
  posts: profilePage.postsReducer.posts,
  newPostText: profilePage.postsReducer.newPostText,
  profile: profilePage.profileReducer
})

const dispatch = {addPost, changeNewPostText, setProfile}

export default withRouter(connect<StatePT, DispatchPT, any, RootState>(mapStateToProps, dispatch)(ProfileContainer))