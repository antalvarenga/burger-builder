import React from 'react';

import classes from './Button.module.css';


const Button = (props) => (
    <button 
        className={[classes.Button, classes[props.type]].join(' ')}
        onClick={props.onClickHandler}>
            {props.children}
    </button>
)

export default Button;