import store from 'app/providers/store/config/store'
import {RootState} from 'app/providers/store/config/store.model'
import {GlobalStyles} from 'assets/styles/globalStyles.styled'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import App from './App'


export const renderEntireTree = (state: RootState) => {

  ReactDOM.render(
    <>
      <React.StrictMode>
        <BrowserRouter>
          <Provider store={store}>
            <App/>
          </Provider>
          <GlobalStyles/>
        </BrowserRouter>
      </React.StrictMode>
    </>,
    document.getElementById('root')
  )
}

renderEntireTree(store.getState())
store.subscribe(() => {
  const state = store.getState()
  renderEntireTree(state)
})