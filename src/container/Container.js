
import React, { Component } from 'react';

import Footer from './Footer'
import Home from './Home'
import Menu from './Menu'
import Tasks from './Tasks'
import { Route } from 'react-router-dom'
import "./styles/Container.css"
import "./styles/shared.css"

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
    render = () => {
        console.log(this.props)
        return (
        <div className="Container">
            <header>Time</header>
            <section className='main-display'>

                <Route path='/' component={Home} />
                <Route exact path='/menu' render={props => <Menu apps={this.state.apps} {...props}/>} />
                <Route path='/tasks' render={() => <Tasks />} />
            
            </section>
            <Footer />

        </div>
        );
    }
    
}

export default Container;
