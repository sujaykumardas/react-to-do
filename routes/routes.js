import { Route } from "react-router-dom"
import React from 'react'
import TodoInput from "../components/TodoInput"
import TodoList from "../components/TodoList"
import App from "../components/App"
import { Switch } from 'react-router'

const routes = (
  <Switch>
    <Route exact path="/" component={App} />
    <Route exact path="/todo" component={TodoInput} />
    <Route exact path="/todos" component={TodoList} />
  </Switch>
)

export default routes