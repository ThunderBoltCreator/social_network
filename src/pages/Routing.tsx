import {HomeContainer} from 'pages/home/HomeContainer'
import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {DialogsContainer} from './dialogs/DialogsContainer'
import {ProfileContainer} from './profile/ProfileContainer'

export const Routing = () => {
  return (
    <>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <HomeContainer/>}
        />
        <Route
          path={'/profile'}
          render={() => <ProfileContainer/>}
        />
        <Route
          path={'/dialogs'}
          render={() => <DialogsContainer/>}
        />
        {/*<Route*/}
        {/*  path="/messages/:id"*/}
        {/*  render={() => <Messages />}*/}
        {/*/>*/}
        {/*<Route*/}
        {/*  path="*"*/}
        {/*  render={() => <Error404/>}*/}
        {/*/>*/}
      </Switch>
    </>
  )
}