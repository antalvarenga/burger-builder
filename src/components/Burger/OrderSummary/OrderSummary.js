import React, {Component} from 'react';

import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class  OrderSummary extends Component {

    componentWillUpdate() {
        console.log('[OrderSummary] WillUpdate')
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(ingKey => (
                <li key={ingKey}>
                    <span style={{ textTransform: 'capitalize' }}>{ingKey}</span>:
                    {this.props.ingredients[ingKey]}
                </li>
            )
        )
        return (
            <Aux>
                <h3>Your Order</h3>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}$</strong></p>
                <p>Continue to checkout?</p>
                <Button type="Danger" onClickHandler={this.props.purchaseCancelHandler}>Cancel</Button>
                <Button type="Success" onClickHandler={this.props.purchaseContinueHandler}>Continue</Button>
            </Aux>
        )
    }
}


export default OrderSummary;