import React, { Component } from 'react'

export class form extends Component {
  state={
    content: '',
    description:''
  }

  onChangeValue = event => {
    this.setState({
      content: event.target.value,
      description: this.state.description
    })
  }
  onChangeDescription = event => {
    this.setState({
      content:this.state.content,
      description: event.target.value
    })
  }
  // onChangeDescription = event => {
  //   this.setState({

  //   })
  // }

//I'm passing the value from this state to the function in app.js to create a new task inside the backlog
  handleSubmit = event => {
    event.preventDefault();

    this.props.handleNewBackLogElem(this.state.content, this.state.description);
   
    
    this.setState({
      content:'',
      description:''
    })
  }
  render() {
    return (
      <div>
        <form onSubmit = { this.handleSubmit}>
          <label for ='content'></label>
          <input onChange={this.onChangeValue} type ='text' name='content' value={this.state.content}/>
          <label for ='textarea'></label>
          <textarea onChange={this.onChangeDescription}name='textarea' value={this.state.description}/>
          <input type ='submit' value='Add'/>
        </form>
      </div>
    )
  }
}

export default form
