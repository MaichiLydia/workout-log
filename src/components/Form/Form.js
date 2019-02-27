import React from 'react';
import FieldContainer from './FieldContainer';
import Button from './Button';


function Form(props){
    return(
        <div>
            <h1>{props.title}</h1>
            <p>{props.text}</p>

            <form onSubmit={props.onSubmit}  className="form">
                {props.children}
            </form>
        </div>
    )
}
Form.FieldContainer = FieldContainer;
Form.Button = Button;


export default Form;