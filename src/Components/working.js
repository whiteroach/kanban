import React, { Component } from 'react'
import Card from './card'


export class working extends Component {
  render() {
    const{arrWork, handleUpdate} = this.props;
    return (
      <div className ='col-3'>
        {
          arrWork.map( item => {
           return (
           <Card
           content = {item}
           handleChange = {handleUpdate}
           
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
