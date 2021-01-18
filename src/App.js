import React, { Component } from 'react';
import './App.css';
import Task from './Task/Task'; //imports Task component from Task.js

class App extends Component {
  state = {
    tasks: [
      {taskName: 'Do Dishes', duration: '30', importance: '!'},
      {taskName: 'Clean Desk', duration: '10', importance: '!'},
      {taskName: 'Make Dinner', duration: '50', importance: '!!'},
      {taskName: 'Finish To Do List Project', duration: '120', importance: '!!!'}

    ],
    otherState: 'something else'
  }

  switchNameHandler = () => {
    //console.log('clicked!!!');
    this.setState({tasks: [
      {taskName: 'Do Dishes', duration: '30', importance: '!'},
      {taskName: 'Clean Desk', duration: '10', importance: '!'},
      {taskName: 'Make Dinner', duration: '50', importance: '!!'},
      {taskName: 'Finish To Do List Project', duration: '120', importance: '!!!'}
    ] })
  }

  render() {
    return (
      <div className="App">
        <h1>Tasks:</h1>
      <button onClick={this.switchNameHandler}>Switch Task</button>
        <Task taskName={this.state.tasks[0].taskName} duration={this.state.tasks[0].duration} importance={this.state.tasks[0].importance}/>
        <Task taskName={this.state.tasks[1].taskName} duration={this.state.tasks[1].duration} importance={this.state.tasks[1].importance}/>
        <Task taskName={this.state.tasks[2].taskName} duration={this.state.tasks[2].duration} importance={this.state.tasks[2].importance}/>
        <Task taskName={this.state.tasks[3].taskName} duration={this.state.tasks[3].duration} importance={this.state.tasks[3].importance}/>
      </div> // Person is calling the Person function in person.js. When inspected, just the HTML that's exported is displayed
    );
  }
}

export default App;
