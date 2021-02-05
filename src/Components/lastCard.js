import React, { Component } from 'react'

export class lastCard extends Component {
  render() {
    const{content, handleCancel}= this.props
    return (
      
      <div onClick= {() => {handleCancel(content.id)}}>
        <h5>{content.task}</h5>
        <p>{content.description}</p>
      </div>
    )
  }
}

export default lastCard

