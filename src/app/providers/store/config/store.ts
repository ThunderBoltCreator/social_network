import {dialogsReducer} from 'app/redux/dialogsReducer'
import {profileReducer} from 'app/redux/profileReducer'
import {combineReducers, createStore} from 'redux'


type reducers = ReturnType<typeof CombineReducers>

const CombineReducers = combineReducers({
  dialogs: dialogsReducer,
  profile: profileReducer
})

const store = createStore(CombineReducers)


export default store