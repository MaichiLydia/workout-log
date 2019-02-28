import React from 'react';
import FieldContainer from './FieldContainer';
import Button from './Button';
import PropTypes from 'prop-types';


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

FieldContainer.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    onSubmit: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired 
}

export default Form