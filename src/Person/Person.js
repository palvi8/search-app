import React from 'react';
import './Person.css';
const person = (props) => {
    return (
    <div className="Person">
       <p onClick={props.click}>I'm in the sub component. My name is {props.name} and i'm {props.age} years old</p>
       <p>{props.children}</p>
       <input  type="text" onChange={props.changed} value={props.name}/>
 </div> 
    );
};

export default person;