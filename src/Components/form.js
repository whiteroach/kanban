import React, { Component } from 'react'

export class form extends Component {
  state={
    content: ''
  }

  onChangeValue = event => {
    this.setState({
      content: event.target.value
    })
  }


//I'm passing the value from this state to the function in app.js to create a new task inside the backlog
  handleSubmit = event => {
    event.preventDefault();

    this.props.handleNewBackLogElem(this.state.content);
   
    
    this.setState({
      content:''
    })
  }
  render() {
    return (
      <div>
        <form onSubmit = { this.handleSubmit}>
          <label for ='content'></label>
          <input onChange={this.onChangeValue} type ='text' name='content' value={this.state.content}/>
          <input type ='submit' value='Add'/>
        </form>
      </div>
    )
  }
}

export default form
