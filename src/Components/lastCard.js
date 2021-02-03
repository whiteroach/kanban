import React, { Component } from 'react'

export class lastCard extends Component {
  render() {
    const{content, handleCancel}= this.props
    return (
      
      <div onClick= {() => {handleCancel(content.id)}}>
        <p>{content.task}</p>
        
      </div>
    )
  }
}

export default lastCard

