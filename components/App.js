import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { bindActionCreators } from 'redux'
import actions from '../actions/actions'
import PieChart from 'react-minimal-pie-chart'
import Links from '../routes/links'

class App extends Component {
  render() {
    const divStyle = {
      margin: '40px',
      height: '100px'
    }
    var completedTodos = this.props.todos.filter(todo => {
      return todo.completed === true
    })
    console.log(completedTodos.length,"completedTodos")
    console.log(this.props.todos.length - completedTodos.length,"notcompletedTodos")
    return (      
      <div>          
        <h1 className="header">HomePage</h1>
        {Links()}
        {this.props.todos.length>0 && <PieChart style={divStyle} showChart={false}
          data={[
            { title: 'Completed', value: completedTodos.length, color: 'green' },
            { title: 'NotCompleted', value: this.props.todos.length - completedTodos.length, color: 'red' },
          ]}
        />}
        {/* <TodoInput addTodo={this.props.actions.addTodo}/>
        <TodoList actions={this.props.actions} todos={this.props.todos}/> */}
      </div>
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))