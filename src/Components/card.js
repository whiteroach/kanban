import React, { Component } from 'react'

export class card extends Component {
  render() {
    const{content,handleChange}= this.props;
    return (
      <div onClick = {()=> handleChange(content.id)}>
        <h5>{content.task}</h5>
        <p>{content.description}</p>
      </div>
    )
  }
}

export default card
