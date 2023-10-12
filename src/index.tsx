import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import store from './app/redux/store'
import {GlobalStyles} from './assets/styles/globalStyles.styled'


export const renderEntireTree = () => {

  ReactDOM.render(
    <>
      <React.StrictMode>
        <BrowserRouter>
          <App
            state={store.getState()}
            addPost={store.addPost.bind(store)}
            changeNewPostText={store.changeNewPostText.bind(store)}
          />
          <GlobalStyles/>
        </BrowserRouter>
      </React.StrictMode>
    </>,
    document.getElementById('root')
  )
}

renderEntireTree()
store.subscribe(renderEntireTree)