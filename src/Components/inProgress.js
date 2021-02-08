import React, { Component } from 'react'
import Card from './card'



export class inProgress extends Component {
  render() {
    const{arrProg,handleUpdate,handleRemove} = this.props;
    return (
      <div className ='col-3 columns'>
        <h5>IN PROGRESS</h5>
        {
          arrProg.map(item => {
            return(
              <Card
              content= {item}
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

export default inProgress
