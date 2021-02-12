//function should be the same name as your component / file
//needs to import react to be able to call thsi method

import React from 'react';
import styled from 'styled-components';
// import './Task.css';

const StyledDiv = styled.div`
    width: 60%;
    margin: auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width: 500px) {
        width: 450px
    }
`;

const task = (props) => {
    
    return (
        // <div className="Task" style={style}>
        <StyledDiv>
            <p onClick={props.click}>{props.name} - {props.duration} min. - {props.importance}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </StyledDiv>
        //onClick for props.click references the click property in tasks
            )
};

export default task;