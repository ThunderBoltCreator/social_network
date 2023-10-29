import App from 'app/index'
import store from 'app/store/config/store'
import React from 'react'
import ReactDOM from 'react-dom'

import './app/styles/index.scss'

export const renderEntireTree = () => {

  ReactDOM.render(
    <>
      <App/>
    </>,
    document.getElementById('root')
  )
}

renderEntireTree()
store.subscribe(() => {
  const state = store.getState()
  renderEntireTree()
})