import React from 'react'
import { Provider } from 'react-redux'

import store from './store'

const ReduxApp = () => {
  return (
    <Provider store = {store}>
      <div>ReduxApp</div>
    </Provider>
  )
}

export default ReduxApp;