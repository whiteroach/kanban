import './App.scss';
import Form from './Components/form'
import Backlog from './Components/backlog';
import InProgress from './Components/inProgress';
import Working from './Components/working';
import Done from './Components/done';




import React, { Component } from 'react'

export class App extends Component {
  state = {
    tasks: []
  }

  createItem = (task, description) => {
    let newItem = {
      id: this.state.tasks.length+1,
      task: task,
      description: description,
      status: 1
    }
    this.setState({
      tasks: [...this.state.tasks, newItem]
    });
    console.log(this.state.tasks)
  }

  updateItem = myId => {
    let newTasks = this.state.tasks.map((event) => {
      if (myId === event.id) {

        event.status = event.status + 1
        return event;


      } else return event;
    })
    this.setState({
      tasks: newTasks
    })
  }

  removeItem = e => {
    let newTasks = [...this.state.tasks];
    let index = this.state.tasks.indexOf(e);
    newTasks.splice(index,1);
  
    return this.setState(
      {
        tasks: newTasks
      }
      )
  }

  render() {
    const back = this.state.tasks.filter(e => e.status === 1);
    const inProg = this.state.tasks.filter(e => e.status === 2);
    const work = this.state.tasks.filter(e => e.status === 3);
    const done = this.state.tasks.filter(e => e.status === 4);
    return (
      <div className="App">
        <Form handleNewBackLogElem={this.createItem} />
        <hr className='dash'></hr>
        <div className='row'>

          <Backlog arrBack={back} handleUpdate={this.updateItem} />

          <InProgress arrProg={inProg} handleUpdate={this.updateItem} />
          <Working arrWork={work} handleUpdate={this.updateItem} />

          <Done arrDone={done} handleRemove={this.removeItem} />

        </div>

      </div>
    )
  }
}

export default App

