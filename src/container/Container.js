
import React, { Component } from 'react';

import Footer from './Footer'
import Home from './Home'
import Menu from './Menu'
import Tasks from './Tasks'
import { Route } from 'react-router-dom'

// const path = './Tasks'
// const Tasks = require(`${path}`).default;

class Container extends Component {
    state = {
        apps: [{
            title: "MyApp",
            name: "hello-world",
        }],
        tasks: []
    }
    render() {
        return (
        <div className="Container">

            <Route exact path='/menu' render={() => <Menu apps={this.state.apps}/>} />
            <Route exact path='/' render={() => <Home  />} />
            <Route path='/tasks' render={() => <Tasks />} />
            <Footer />
        </div>
        );
    }
}

export default Container;
