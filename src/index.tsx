import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import {GlobalStyles} from './assets/styles/globalStyles.styled'
import state from './redux/state'

ReactDOM.render(
  <>
    <BrowserRouter>
      <App state={state}/>
      <GlobalStyles/>
    </BrowserRouter>
  </>,
  document.getElementById('root')
)