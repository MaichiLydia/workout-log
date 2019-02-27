import React from 'react';


function Button(props){
    let classes = 'form__btn';
    if(props.disabled){
        classes += ' form__btn--disabled';
    }
    return (
        <button className={classes} >
            {props.children}
        </button>
    )
}

export default Button;