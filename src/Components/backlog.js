import React, { Component } from 'react';
import Card from './card';

export class backlog extends Component {
  render() {
    const{arrBack,handleUpdate} = this.props;
    return (
      <div className ='col-3 columns column-left'>
        <h5>BACKLOG</h5>
        {
          arrBack.map( item => {
            return (
              <Card
              content = {item}
              handleChange = {handleUpdate}
              key= {item.id}/>
              
            )
          })
        }
      </div>
    )
  }
}

export default backlog
