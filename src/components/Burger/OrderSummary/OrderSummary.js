import React from 'react';

import Aux from '../../../hoc/Aux';

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
            <p>Continue to checkout?</p>
        </Aux>
    )
}


export default OrderSummary;