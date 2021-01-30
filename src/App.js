import React, { useState } from 'react'; //useState is hook that lets us manage state in a function component
import './App.css';
import Task from './Task/Task'; //imports Task component from Task.js

const app = props => {
    const [ tasksState, setTasksState ] = useState({
      tasks: [
        {taskName: 'Do Dishes', duration: '30', importance: '!'},
        {taskName: 'Clean Desk', duration: '10', importance: '!'},
        {taskName: 'Make Dinner', duration: '50', importance: '!!'},
        {taskName: 'Finish To Do List Project', duration: '120', importance: '!!!'}
      ],
    });

    const switchTaskHandler = () => {
      setTasksState({ //This passes the following tasks when the 'Switch Task' button is clicked
        tasks: [
          {taskName: 'Do Laundry', duration: 'passive', importance: '!'},
          {taskName: 'Take Out Trash', duration: '5', importance: '!!!'},
          {taskName: 'Clean out fridge', duration: '20', importance: '!!'},
          {taskName: 'Finish To Do List Project (thought you were gonna get out of this one?)', duration: 'whatever it takes, do not give up.', importance: '!!!!'}
        ] 
      });
    }
    return (
      <div className="App">
        <h1>Tasks:</h1>
        <button onClick={switchTaskHandler}>Switch Tasks</button>
        <Task taskName={tasksState.tasks[0].taskName} duration={tasksState.tasks[0].duration} importance={tasksState.tasks[0].importance}/>
        <Task taskName={tasksState.tasks[1].taskName} duration={tasksState.tasks[1].duration} importance={tasksState.tasks[1].importance}/>
        <Task taskName={tasksState.tasks[2].taskName} duration={tasksState.tasks[2].duration} importance={tasksState.tasks[2].importance}/>
        <Task taskName={tasksState.tasks[3].taskName} duration={tasksState.tasks[3].duration} importance={tasksState.tasks[3].importance}/>
      </div> // Person is calling the Person function in person.js. When inspected, just the HTML that's exported is displayed
    ); //button refers to const switchTaskHandler function
    
}



export default app;