import {DialogsContainer} from 'pages/dialogs/container/DialogsContainer'
import ProfileContainer from 'pages/profile/container/ProfileContainer'
import UsersContainer from 'pages/users/UsersContainer'
import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'

export const Routing = () => {
  return (
    <>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Redirect to="/profile"/>}
        />
        <Route
          path={'/profile/:id?'}
          render={() => <ProfileContainer/>}
        />
        <Route
          path={'/dialogs'}
          render={() => <DialogsContainer/>}
        />
        <Route
          path={'/users'}
          render={() => <UsersContainer/>}
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