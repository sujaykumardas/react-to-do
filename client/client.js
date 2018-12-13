import React from 'react'
import { render } from 'react-dom'
import configureStore from '../store/store.js'
import { Provider } from 'react-redux'
import { Router } from "react-router-dom"
import routes from '../routes/routes'
import createBrowserHistory from 'history/createBrowserHistory'
const newHistory = createBrowserHistory()

let initialState = {
  todos: []
}
let store = configureStore(initialState)
console.log(store.getState(),"store")

render(
  <Provider store={store}>
    <Router history={newHistory}>
      {routes}
    </Router>    
  </Provider>,
  document.getElementById('app')
)
