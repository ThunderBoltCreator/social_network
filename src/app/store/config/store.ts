import {dialogsReducer} from 'pages/dialogs/model/dialogsReducer'
import {postsReducer} from 'pages/profile/model/postsReducer'
import {profileReducer} from 'pages/profile/model/profileReducer'
import {usersReducer} from 'pages/users/model/usersReducer'
import {combineReducers, createStore} from 'redux'


type reducers = ReturnType<typeof CombineReducers>

const CombineReducers = combineReducers({
  dialogsPage: dialogsReducer,
  // posts: postsReducer,
  usersPage: usersReducer,
  // profile: profileReducer,
  profilePage: combineReducers({postsReducer, profileReducer})
})

const store = createStore(CombineReducers)

// window.store = store.getState()


export default store