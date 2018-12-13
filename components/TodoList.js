import React, { Component } from 'react'
import TodoItem from './TodoItem'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../actions/actions'

class TodoList extends Component {
  render() {
    console.log("todolist")
    return (
      <ul className="todo__list">
      {
        this.props.todos.map((todo) => {
        if (todo.display === true) {
          return <TodoItem key={todo.id} todo={todo} actions=
          {this.props.actions}/>
        }
        })
      }
      </ul>
    )
  }
}
function mapStateToProps(state) {
  console.log(state,"state")
  return state
}
function mapDispatchToProps(dispatch) {
  console.log(dispatch,"dispatch")
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TodoList))