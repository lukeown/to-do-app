//function should be the same name as your component / file
//needs to import react to be able to call thsi method

import React from 'react';
import './Task.css';

const task = (props) => {
    return (
        <div className="Task">
            
            <p onClick={props.click}>{props.name} - {props.duration} min. - {props.importance}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
        //onClick for props.click references the click property in tasks
            )
};

export default task;