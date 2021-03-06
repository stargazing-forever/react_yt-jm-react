import React from 'react'
import { Provider } from 'react-redux'
import Contador from './components/Contador'
import ShoppingCart from './components/shopping/ShoppingCart'

import store from './store'

const ReduxApp = () => {
  return (
    <Provider store = {store}>
      <h1>Applications Jon Course</h1>
      <ShoppingCart />
      <hr />
      <Contador />
      <hr />
      <h2>ReduxApp</h2>
    </Provider>
  )
}

export default ReduxApp;