import React from 'react';

function Select(props){
    function validate(e){
        const name = e.target.name;
        const value = e.target.value;
    

        if(props.required && value.trim()=== ''){
            props.onChange(name, value, "Campo obrigatório")
            return
        }

        props.onChange(name,value);
        
    }
    return(
        <select className="form__select" name={props.name} onChange={validate}>
            {props.options.map(option => (
              <option className="form__option" value={option.id} key={option.id}>{option.name}</option>
            ))}
        </select>   
    )
}

export default Select;