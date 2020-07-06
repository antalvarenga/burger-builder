import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients)
        .map(ingKey => {
            return [...Array(props.ingredients[ingKey])].map((_, i) => 
                <BurgerIngredient type={ingKey} key={ingKey + i} />
            )
        })

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default Burger;

// ingredients: {
//     salad: 1,
//     bacon: 1,
//     cheese: 2,
//     meat: 2
// }

// Object.keys =>
// ['salad', 'bacon', 'meat', 'cheese']

// .map =>
// [[undefined]]

// .map =>
// <BurgerIngredient type='salad' key='salad1' />