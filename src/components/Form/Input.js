import React from 'react'
import { isGreaterDate, timerValidate } from '../../helpers'
import PropTypes from 'prop-types'

function Input(props){

    function inputValidate(e){ 
        const name = e.target.name;
        const value = e.target.value;


        if(props.required && value.trim() === ''){
            props.onChange(name, value, "Required Field")
            return
        }

        if(props.type === 'time' && !(timerValidate(e.target.value, props.min))){
            props.onChange(name, value, e.target.name + ' must be greater than ' + props.min )
            return
        }

        if(props.type === 'date' && !(isGreaterDate(e.target.value, props.min)) ){
            props.onChange(name, value, " Date must be greater than 01 Jan 2000");
            return
        }
        props.onChange(name,value);
    }

    if(props.type === 'date' || props.type === 'time'){
        return (
        <input 
            className="form__input"
            id={props.id}
            type={props.type}
            name={props.name}
            placeholder={props.placeholder}
            min={props.min}
            max={props.max}
            onBlur={inputValidate}
             />

        )       
    }
    return (
       
        <input 
            className="form__input"
            id={props.id}
            type={props.type}
            name={props.name}
            min={props.min}
            max={props.max}
            placeholder={props.placeholder}
            onChange={inputValidate} />
    )
}

Input.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    required: PropTypes.bool,
    min: PropTypes.string,
    max: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func

}
export default Input;
