import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import Task from './Task/Task'; //imports Task component from Task.js

const StyledButton = styled.button`
  background-color: ${props => props.alt ? '#48c2af' : '#9CD1A9'};
  color: white;
  font: inherit;
  border: 4px #48c2af solid;
  border-radius: 6px;
  padding: 8px;
  margin: 4px;
  cursor: pointer;
  box-shadow: 0 2px 3px grey;
  &:hover {
    background-color: ${props => props.alt ? '#9CD1A9' : '#48c2af'};
    border: 4px #48c2af solid;
  }
`;

class App extends Component {
  state = {
    tasks: [
      {id: 'boidi', taskName: 'Do Dishes', duration: '30', importance: '!'},
      {id: 'ihnig', taskName: 'Clean Desk', duration: '10', importance: '!'},
      {id: 'skdjr', taskName: 'Make Dinner', duration: '50', importance: '!!'},
      {id: 'ijgrl', taskName: 'Finish To Do List Project', duration: '120', importance: '!!!'}
    ],
    otherState: 'some other value',
    showTasks: false
  };


  taskChangedHandler = ( event, id ) => {
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    const taskIndex = this.state.tasks.findIndex(p => {
      return p.id === id;
    });

    const task = {
      ...this.state.tasks[taskIndex]
    };
    
    task.name = event.target.value;

    const tasks = [...this.state.tasks];
    tasks[taskIndex] = task;

    this.setState( {tasks: tasks} );
  };

  deleteTaskHandler = (taskIndex) => {
    const tasks = [...this.state.tasks]
    tasks.splice(taskIndex, 1);
    this.setState({tasks: tasks})
  }

  toggleTasksHandler = () => {
    const doesShow = this.state.showTasks;
    this.setState( {showTasks: !doesShow} ); //converts doesShow to other boolean
  }

  render() {
    const style = {
      backgroundColor: '#48c2af',
      color: 'white',
      font: 'inherit',
      border: '4px #48c2af solid',
      borderRadius: '6px',
      padding: '8px',
      margin: '4px',
      cursor: 'pointer',
      boxShadow: '0 2px 3px grey',
      ':hover': {
        color: 'black'
      }
    };

    let tasks = null;

    if ( this.state.showTasks ) {
      tasks = (
        <div>
          {this.state.tasks.map((task, index) => { //this function is executed on every element in the tasks array
            return <Task
              click={() => this.deleteTaskHandler(index)}
              name={task.taskName}
              duration={task.duration}
              importance={task.importance}
              key={task.id}
              changed={(event) => this.taskChangedHandler(event, task.id)}
              />
          })}
          
        </div>
      );

      style.backgroundColor = '#7bd4c6';
      style[':hover'] =  {
        backgroundColor: 'lightblue',
        color: 'green'
      };
      style.border = '4px #7bd4c6 solid';
    }

    const classes = [];
    if (this.state.tasks.length <= 2) {
      classes.push('red');
    }
    if (this.state.tasks.length <= 1) {
      classes.push('bold');
    }

    //this way of handling the task toggler is better because it essentially outsources--
    //the jsx check from the start of the return to a variable we conditionally assign before returning (tasks variable)
    //we're still returning the same information, but the tasks variable just referenced through {tasks} instead of handling everything on return

    return (
      <div className="App">
        <h1 className={classes.join(' ')}>Today's Tasks</h1>
        <StyledButton alt={this.state.showTasks} onClick={this.toggleTasksHandler}>
          Show Current Tasks
        </StyledButton>
        {tasks}
        
        
      </div>
    ); // Task is calling the Task function in task.js. When inspected, just the HTML that's exported is displayed
       // button refers to the toggleTaskHandler function
  }
}
// Explanation of .bind(this, "") - this controls what this.setState will refer to --
// By binding this to the outside of the switchTaskHandler function, we are binding 
// it to the class
// Another way you could do this is with a function: onclick= {() => this.switchNameHandler('insert desired string here')}
// This way isn't as efficient and can cause react to rerender this too many times. bind syntax is better for this


export default App;
