import React from 'react'
import { Provider } from 'react-redux'
import Contador from './components/Contador'

import store from './store'

const ReduxApp = () => {
  return (
    <Provider store = {store}>
      <h1>Practice</h1>
      <hr />
      <Contador />
      <hr />
      <h2>ReduxApp</h2>
    </Provider>
  )
}

export default ReduxApp;