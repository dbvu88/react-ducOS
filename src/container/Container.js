
import React, { Component } from 'react';

import Footer from '../components/Footer'
import Home from '../components/Home'
import Menu from '../components/Menu'
import Tasks from '../components/Tasks'

import { Route } from 'react-router-dom'

class Container extends Component {
  render() {
    return (
      <div className="Container">
        <header className="Container-header">

        </header>

        <Route exact path='/menu' render={() => <Menu />} />

        <Route exact path='/' render={() => <Home />} />

        <Route path='/tasks' render={() => <Tasks />} />

        <Footer />

        

      </div>

      
    );
  }
}

export default Container;
