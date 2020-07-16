import React, { Component } from 'react'
import axios from '../../../axios-orders'

import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.module.css'
import Spinner from '../../../components/UI/Spinner/Spinner'
import { withRouter } from 'react-router-dom'

class ContactData extends Component {
    state = {
        customer: {
            name: '',
            address: {
                street: '',
                zipCode: '',
                country: ''
            },
            email: ''
        },
        deliveryMethod: '',
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault()
        this.setState({ loading: true })
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            customer: {
                name: 'nintant',
                address: {
                    street: 'rua 1',
                    zipCode: '213124',
                    country: 'Portugal'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'normal'
        }
        console.log(order)
        axios.post('/orders.json', order)
            .then(resp => {
                this.setState({ loading: false })
                this.props.history.push('/')
            })
            .catch(err => this.setState({ loading: false }))
        console.log(this.props.ingredients)
    }

    render() {
        let form = (
            <form>
                <input className={classes.Input} type="text" name="name" />
                <input className={classes.Input} type="text" name="street" />
                <input className={classes.Input} type="text" name="zipCode" />
                <input className={classes.Input} type="text" name="country" />
                <input className={classes.Input} type="text" name="email" />
                <Button type="Success" onClickHandler={this.orderHandler}>Order</Button>
            </form>
        )
        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact data</h4>
                {form}

            </div>
        )
    }
}

export default withRouter(ContactData)