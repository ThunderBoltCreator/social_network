import React from 'react'
import {Route, Switch} from 'react-router-dom'

import s from './assets/styles/appStyle.styled'
import {Header} from './components/layout/header/Header'
import {Sidebar} from './components/layout/sidebar/Sidebar'
import {Dialogs} from './pages/dialogs/Dialogs'
import {Profile} from './pages/profile/Profile'
import {IState} from './app/redux/state.types'
import {Checkbox} from "./shared/checbox";

interface IApp {
   state: IState
   addPost: (message: string) => void
}

function App(props: IApp) {
   const {
      state,
      addPost
   } = props

   return (
      <s.AppWrapper>
         <Header/>
         <Sidebar/>

         <Checkbox/>

         <s.AppContent>
            <Switch>
               <Route path={'/profile'} render={() => <Profile profileState={state.profilePage} addPost={addPost} />}/>
               <Route path={'/dialogs'} render={() => <Dialogs dialogsState={state.dialogsPage}/>}/>
            </Switch>
         </s.AppContent>
      </s.AppWrapper>
   )
}

export default App

