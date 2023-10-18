import {RootState} from 'app/providers/store/config/store.model'
import {connect} from 'react-redux'
import {Profile} from './Profile'

const mapStateToProps = (state: RootState) => ({
  profilePage: state.profile
})
const mapDispatchToProps = () => ({})

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)