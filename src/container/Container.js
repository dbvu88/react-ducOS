
import React, { Component } from 'react';
import Footer from '../components/Footer'
import Home from '../components/Home'
import Menu from '../components/Menu'
import { Route } from 'react-router-dom'

class Container extends Component {
  render() {
    return (
      <div className="Container">
        <header className="Container-header">

        </header>

        <Route exact path='/' render={() => <Home />} />


        <Footer />

        
        <Route exact path='/Menu' render={() => <Menu />} />

      </div>

      
    );
  }
}

export default Container;
