import React from 'react';

import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
]

const BuildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current price: <strong>{props.currentPrice.toFixed(2)}$</strong></p>
        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.type} 
                label={ctrl.label}
                addHandler={() => props.ingredientAdded(ctrl.type)}
                removeHandler={() => props.ingredientRemoved(ctrl.type)}
                isDisabled={props.disabledInfo[ctrl.type]}/>
        ))}
        <button 
            disabled={!props.purchasable}
            className={classes.OrderButton}
            onClick={props.purchasing}>
            Order Now
        </button>
    </div>
)


export default BuildControls