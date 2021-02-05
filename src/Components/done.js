import React, { Component } from 'react'
// import Card from './card'
import LastCard from './lastCard'
export class done extends Component {
  render() {
    const {arrDone, handleRemove} = this.props;
    return (
      <div className ='col-3 columns'>
        <h5>DONE</h5>
        {
          arrDone.map( item => {
            return(
            <LastCard
            content = { item }
            key= {item.id}
            handleCancel = {handleRemove}
            />
            )
          })
        }
      </div>
    )
  }
}

export default done
