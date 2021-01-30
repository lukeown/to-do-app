import React, { Component } from 'react';
import './App.css';
import Task from './Task/Task';

class App extends Component {
  state = {
    tasks: [
      {taskName: 'Do Dishes', duration: '30', importance: '!'},
      {taskName: 'Clean Desk', duration: '10', importance: '!'},
      {taskName: 'Make Dinner', duration: '50', importance: '!!'},
      {taskName: 'Finish To Do List Project', duration: '120', importance: '!!!'}
    ],
    otherState: 'some other value'
  };

  switchTaskHandler = () => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      tasks: [
        {taskName: 'Do Laundry', duration: 'passive', importance: '!'},
        {taskName: 'Take Out Trash', duration: '5', importance: '!!!'},
        {taskName: 'Clean out fridge', duration: '20', importance: '!!'},
        {taskName: 'Finish To Do List Project (thought you were gonna get out of this one?)', duration: 'whatever it takes, do not give up.', importance: '!!!!'}
      ] 
    });
  };

  render() {
    return (
      <div className="App">
        <h1>To Do List</h1>
        <p>Click Switch Task button for new tasks</p>
        <button onClick={this.switchTaskHandler}>Switch Task</button>
        <Task taskName={this.state.tasks[0].taskName} duration={this.state.tasks[0].duration} importance={this.state.tasks[0].importance}/>
        <Task taskName={this.state.tasks[1].taskName} duration={this.state.tasks[1].duration} importance={this.state.tasks[1].importance}/>
        <Task taskName={this.state.tasks[2].taskName} duration={this.state.tasks[2].duration} importance={this.state.tasks[2].importance}/>
        <Task taskName={this.state.tasks[3].taskName} duration={this.state.tasks[3].duration} importance={this.state.tasks[3].importance}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
