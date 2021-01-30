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
    otherState: 'some other value'
  };

  switchTaskHandler = (newTask) => {
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      tasks: [ 
        //This passes the following tasks when the 'Switch Task' button is clicked
        {taskName: 'Do Laundry', duration: 'passive', importance: '!'},
        {taskName: newTask, duration: '5', importance: '!!!'},
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
        <button onClick={this.switchTaskHandler.bind(this, "You want MORE tasks? Fine, click me for another")}>Switch Task</button>
        {/* Explanation of .bind(this, "") - this controls what this.setState will refer to --
            By binding this to the outside of the switchTaskHandler function, we are binding 
            it to the class
            Another way you could do this is with a function: onclick= {() => this.switchNameHandler('insert desired string here')}
            This way isn't as efficient and can cause react to rerender this too many times. bind syntax is better for this
        */}
        <Task 
          taskName={this.state.tasks[0].taskName} 
          duration={this.state.tasks[0].duration} 
          importance={this.state.tasks[0].importance}/>
        <Task 
          taskName={this.state.tasks[1].taskName} 
          duration={this.state.tasks[1].duration} 
          importance={this.state.tasks[1].importance}
          click={this.switchTaskHandler.bind(this, "You're wild. Fine, go organize the boxes of stuff in the living room.")}/> 
          {/* click is triggered by the p onClick event in Task.js 
              - clicking this line will call the switchTaskHandler function 
          */}
        <Task 
          taskName={this.state.tasks[2].taskName} 
          duration={this.state.tasks[2].duration} 
          importance={this.state.tasks[2].importance}/>
        <Task 
          taskName={this.state.tasks[3].taskName} 
          duration={this.state.tasks[3].duration} 
          importance={this.state.tasks[3].importance}/>
      </div>
    ); // Person is calling the Person function in person.js. When inspected, just the HTML that's exported is displayed
       // button refers to const switchTaskHandler function
  }
}

export default App;
