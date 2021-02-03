import React, { Component } from 'react'

export class card extends Component {
  render() {
    const{content,handleChange}= this.props;
    return (
      <div onClick = {()=> handleChange(content.id)}>
        <p>{content.task}</p>
        
      </div>
    )
  }
}

export default card
