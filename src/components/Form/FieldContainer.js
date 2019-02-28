import React from 'react';
import Input from './Input';
import Select from './Select';
import PropTypes from 'prop-types';


function FieldContainer(props){
    return (
        <div className="form__field-container">
            <label className="form__field-label" htmlFor={props.htmlFor}>
                {props.title}
            </label>
            { props.children}
            
            { props.error && (
                <p className="form__field-container--error">
                    {props.error}
                </p>
            )}
        </div>
    )
}

FieldContainer.Input = Input;
FieldContainer.Select = Select;

FieldContainer.propTypes = {
    htmlFor: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired 
}

export default FieldContainer;