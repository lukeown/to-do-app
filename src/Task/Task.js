//function should be the same name as your component / file
//needs to import react to be able to call thsi method

import React from 'react';

const task = (props) => {
    return (
        <div>
            
            <p onClick={props.click}>{props.taskName} - {props.duration} min. - {props.importance}</p>
            <p>{props.children}</p>
        </div>
        //onClick for props.click references the click property in tasks
            )
};

export default task;