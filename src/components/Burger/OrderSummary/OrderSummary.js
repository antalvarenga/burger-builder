import React from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(ingKey => (
            <li key={ingKey}>
                <span style={{ textTransform: 'capitalize' }}>{ingKey}</span>:
                {props.ingredients[ingKey]}
            </li>
        )
        )

    return (
        <Aux>
            <h3>Your Order</h3>
            <ul>
                {ingredientSummary}
            </ul>
    <p><strong>Total Price: {props.price.toFixed(2)}$</strong></p>
            <p>Continue to checkout?</p>
            <Button type="Danger" onClickHandler={props.purchaseCancelHandler}>Cancel</Button>
            <Button type="Success" onClickHandler={props.purchaseContinueHandler}>Continue</Button>
        </Aux>
    )
}


export default OrderSummary;