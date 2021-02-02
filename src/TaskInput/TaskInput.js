//function should be the same name as your component / file
//needs to import react to be able to call this method

import React from 'react';

const taskInput = (props) => {
    return (
        <div>
            <input type="text" className="userInput" onChange={props.taskChanged}/>
            <input type="text" className="userInput" onChange={props.durationChanged}/>
            <input type="text" className="userInput" onChange={props.importanceChanged}/>
        </div>
            )
};

export default taskInput;