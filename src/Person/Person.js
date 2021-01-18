//function should be the same name as your component / file
//needs to import react to be able to call thsi method

import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>I am {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
        </div>
    )
};

export default person;