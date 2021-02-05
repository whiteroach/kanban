import React, { Component } from 'react'

export class card extends Component {
  render() {
    const{content,handleChange}= this.props;
    return (
      <div onClick = {()=> handleChange(content.id)} className='my-card '>
        
        <h5><span>Type: </span>{content.task}</h5>
        <p><span>Description: </span>{content.description}</p>
      </div>
    )
  }
}

export default card
