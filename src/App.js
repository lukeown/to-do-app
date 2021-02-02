import React, { Component } from 'react';
import './App.css';
import Task from './Task/Task'; //imports Task component from Task.js;
import TaskInput from './TaskInput/TaskInput'

class App extends Component {
  state = {
    taskName: 'Task Name', duration: 'Task Duration', importance: 'Task Importance: !-!!!!'};
    

  addTaskHandler = (newTask, newDuration, newImportance) => {
    this.setState( 
      {taskName: newTask.target.value, duration: newDuration.target.value, importance: newImportance.target.value}
    );
  };
  // switchTaskHandler = (newTask) => {
  //   // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
  //   this.setState({
  //     tasks: [ 
  //       //This passes the following tasks when the 'Switch Task' button is clicked
  //       {taskName: 'Do Laundry', duration: 'passive', importance: '!'},
  //       {taskName: newTask, duration: '5', importance: '!!!'},
  //       {taskName: 'Clean out fridge', duration: '20', importance: '!!'},
  //       {taskName: 'Finish To Do List Project (thought you were gonna get out of this one?)', duration: 'whatever it takes, do not give up.', importance: '!!!!'}
  //     ] 
  //   });
  // };

  taskChangedHandler = (event) => {
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    let { task, taskName, duration, importance } = this.state
    task.push(taskName, duration, importance);
    
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '4px white solid',
      borderRadius: '6px',
      padding: '8px',
      margin: '4px',
      cursor: 'pointer',
      boxShadow: '0 2px 3px grey'

    }
    return (
      <div className="App">
        <h1>To Do List</h1>
        <p>Click Switch Task button for new tasks</p>
        <button 
          style={style}
          onClick={this.addTaskHandler}>New Task</button>
        {/* Explanation of .bind(this, "") - this controls what this.setState will refer to --
            By binding this to the outside of the switchTaskHandler function, we are binding 
            it to the class
            Another way you could do this is with a function: onclick= {() => this.switchNameHandler('insert desired string here')}
            This way isn't as efficient and can cause react to rerender this too many times. bind syntax is better for this
        */}
        <ol>
        <Task 
          taskName={this.taskChangedHandler.bind(this)} 
          duration={this.taskChangedHandler.bind(this)} 
          importance={this.taskChangedHandler.bind(this)}/>
          {/* click is triggered by the p onClick event in Task.js 
              - clicking this line will call the switchTaskHandler function 
          */}
        </ol>
        <TaskInput 
          changed={this.taskChangedHandler.bind(this)}
        />
      </div>
    );
       // button refers to const addTaskHandler function
  }
}

export default App;
