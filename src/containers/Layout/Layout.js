import React, {Component} from 'react';

import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerCloseHandler = () => {
        this.setState({showSideDrawer: false})
    }

    sideDrawerOpenHandler = () => {
        this.setState({showSideDrawer: true})
    }

    render() {
    return (
        <Aux>
            <Toolbar sideDrawerOpenHandler={this.sideDrawerOpenHandler}/>
            <SideDrawer showSideDrawer={this.state.showSideDrawer} sideDrawerCloseHandler={this.sideDrawerCloseHandler} />
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Aux>
    )
    }
}


export default Layout;