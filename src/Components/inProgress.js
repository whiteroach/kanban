import React, { Component } from 'react'
import Card from './card'



export class inProgress extends Component {
  render() {
    const{arrProg,handleUpdate} = this.props;
    return (
      <div className ='col-3'>
        {
          arrProg.map(item => {
            return(
              <Card
              content= {item}
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

export default inProgress
