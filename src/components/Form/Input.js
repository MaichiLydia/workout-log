import React from 'react'


function Input(props){

    function inputValidate(e){ 
        console.log("EE");
        const name = e.target.name;
        const value = e.target.value;
        if(props.required && value.trim() === ''){
            props.onChange(name, value, "Campo obrigatório")
            return
        }

        if(props.type === 'time'){
            console.log(e.target.value);
        }
        if(props.type === 'date'){
            console.log(e.target.value);
        }
        props.onChange(name,value);
    }

    return (
        <input 
            className="form__input"
            id={props.id}
            type={props.type}
            name={props.name}
            placeholder={props.placeholder}
            onChange={inputValidate} />
    )
}
export default Input;
