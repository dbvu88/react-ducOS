
import React, { Component } from 'react';

import Footer from './Footer'
import Home from './Home'
import Menu from './Menu'
import Tasks from './Tasks'



import { Route } from 'react-router-dom'

class Container extends Component {
    state = {
        apps: [],
        tasks: []
    }
    render() {
        return (
        <div className="Container">

            <Route exact path='/menu' render={() => <Menu />} />
            <Route exact path='/' render={() => <Home />} />
            <Route path='/tasks' render={() => <Tasks />} />
            <Footer />
        </div>
        );
    }
}

export default Container;
