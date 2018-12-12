import { Route } from "react-router-dom";
import React from 'react'
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";
import App from "../components/App";

const routes = (
  <Route path="/" component={App}>
    <Route path="todo" component={TodoInput} />
    <Route path="todos" component={TodoList} />     
  </Route>
)

export default routes