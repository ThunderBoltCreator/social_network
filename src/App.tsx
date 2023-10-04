import React from 'react'
import {Route, Switch} from 'react-router-dom'

import s from './assets/styles/appStyle.styled'
import {Header} from './components/layout/header/Header'
import {Sidebar} from './components/layout/sidebar/Sidebar'
import {Dialogs} from './pages/dialogs/Dialogs'
import {Profile} from './pages/profile/Profile'
import {IState} from './redux/state'

interface IApp {
  state: IState

}

function App(props: IApp) {
  const {
    state
  } = props

  return (
    <s.AppWrapper>
      <Header/>
      <Sidebar/>
      <s.AppContent>
        <Switch>
          <Route path={'/profile'} render={() => <Profile profileState={state.profilePage}/>}/>
          <Route path={'/dialogs'} render={() => <Dialogs dialogsState={state.dialogsPage}/>}/>
        </Switch>
      </s.AppContent>
    </s.AppWrapper>
  )
}

export default App

