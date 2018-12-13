import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../actions/actions'
import { withRouter } from 'react-router'

class TodoInput extends Component {
  constructor(props) {
    console.log(props,"props")
    super(props)
    this.state = {
      title: ''
    }
  }
  handleTitleChange(event) {
    console.log(event);
    this.setState({
      title: event.target.value
    })
  }
  handleSubmit(event) {
    event.preventDefault()
    if (this.state.title != '')
    {
      this.props.actions.addTodo(this.state.title)
      //reset input box
      this.setState({
        title: ''
      })
    }
  }
  render() {
    console.log("TodoInput")
    return (
    <div className="todo__input">
      <div className="title">
        <input 
         type="text"
         placeholder="title.."
         required={true}
         value={this.state.title}
         onChange={this.handleTitleChange.bind(this)}
        />
      </div>
      <div className="submitButton">
        <button onClick={this.handleSubmit.bind(this)}>Add</button>
      </div>    
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TodoInput))