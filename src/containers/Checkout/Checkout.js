import React, { Component } from 'react'
import {Route} from 'react-router-dom'

import CheckoutSummary from '../../components/Checkout/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData'

class Checkout extends Component {
    state = {
        ingredients: null,
        totalPrice: null
    }

    componentWillMount() {
        const query = this.props.location.query
        this.setState({
            ingredients: query.ingredients,
            totalPrice: query.totalPrice
        })
    }

    onCancelHandler = () => {
        this.props.history.goBack()
    }

    onContinueHandler = () => {
        this.props.history.replace('/checkout/contact-data')
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <CheckoutSummary 
                    ingredients={this.state.ingredients}
                    onCancelHandler={this.onCancelHandler}
                    onContinueHandler={this.onContinueHandler}/>
                <Route path={this.props.match.path + '/contact-data'}
                    render={() => (
                        <ContactData 
                            ingredients={this.state.ingredients}
                            totalPrice={this.state.totalPrice}/>
                    )}/>
            </div>
        )
    }
}

export default Checkout