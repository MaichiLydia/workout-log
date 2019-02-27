import React from 'react';
import Input from './Input';
import Select from './Select';

function FieldContainer(props){
    return (
        <div className="form__field-container">
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


export default FieldContainer;