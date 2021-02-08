import React, { Component } from 'react'
import Card from './card'


export class working extends Component {
  render() {
    const{arrWork, handleUpdate, handleRemove} = this.props;
    return (
      <div className ='col-3 columns'>
        <h5>WORKING</h5>
        {
          arrWork.map( item => {
           return (
           <Card
           content = {item}
           handleChange = {handleUpdate}
           handleCancel = {handleRemove}
           key= {item.id}
           />
           )
          })
        }
      </div>
    )
  }
}

export default working
