import React from 'react'

import classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Hamburger from '../../UI/Hamburger/Hamburger'

const Toolbar = (props) => (
    <header className={classes.Toolbar}>
        <Hamburger onClickHandler={props.sideDrawerOpenHandler}/>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
)

export default Toolbar