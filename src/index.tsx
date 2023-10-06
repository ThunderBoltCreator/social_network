import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import {GlobalStyles} from './assets/styles/globalStyles.styled'
import state, {addPost} from './app/redux/state'

ReactDOM.render(
   <>
      <React.StrictMode>
         <BrowserRouter>
            <App addPost={addPost} state={state}/>
            <GlobalStyles/>
         </BrowserRouter>
      </React.StrictMode>
   </>,
   document.getElementById('root')
)