import React from 'react';
import PropTypes from 'prop-types';


function Button(props){
    let classes = 'form__btn'
    if(props.disabled){
        classes += ' form__btn--disabled'
        return (
            <button className={classes} disabled>
                {props.children}
            </button>
        )
    }
    return (
        <button className={classes}>
            {props.children}
        </button>
    )
    
}
Button.propTypes = {
    disabled: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
    ]).isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired 
}


export default Button;