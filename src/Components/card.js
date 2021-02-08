import React, { Component } from 'react'

export class card extends Component {
  render() {
    const{content,handleChange,handleCancel}= this.props;
    return (
      <div  className='my-card '>
        <p onClick ={() =>{handleCancel(content)}} className='cancel'>X</p>
        <h5 onClick = {()=> handleChange(content.id)}><span>Type: </span>{content.task}</h5>
        <p><span>Description: </span>{content.description}</p>
      </div>
    )
  }
}

export default card
