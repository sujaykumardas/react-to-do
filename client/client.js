import React from 'react'
import { render } from 'react-dom'
import App from '../components/App'
import configureStore from '../store/store.js'
import { Provider } from 'react-redux'

let initialState = {
  todos: []
}
let store = configureStore(initialState)
console.log(store.getState(),"store")

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
)
