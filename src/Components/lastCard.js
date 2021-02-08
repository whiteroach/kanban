import React, { Component } from 'react'

export class lastCard extends Component {
  render() {
    const{content, handleCancel}= this.props
    return (
      
      <div className='last-card'>
        <p onClick ={() =>{handleCancel(content)}} className='cancel'>X</p>
        <h5><span>Type: </span>{content.task}</h5>
        <p><span>Description: </span>{content.description}</p>
      </div>
    )
  }
}

export default lastCard

