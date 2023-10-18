import {Header} from 'components/layout/header/Header'
import {Sidebar} from 'components/layout/sidebar/Sidebar'
import {DialogsContainer} from 'pages/dialogs/DialogsContainer'
import {ProfileContainer} from 'pages/profile/ProfileContainer'
import React from 'react'
import {Route, Switch} from 'react-router-dom'

import s from './assets/styles/appStyle.styled'

interface IApp {
  // state: RootState
  // dispatch: (action: DispatchAction) => void
}

function App(props: IApp) {
  const {} = props

  return (
    <s.AppWrapper>
      <Header/>
      <Sidebar/>
      <s.AppContent>
        <Switch>
          <Route
            path={'/profile'}
            render={() => <ProfileContainer/>}/>
          <Route
            path={'/dialogs'}
            render={() => <DialogsContainer/>}/>
        </Switch>
      </s.AppContent>
    </s.AppWrapper>
  )
}

export default App

