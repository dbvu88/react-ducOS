
import React, { Component } from 'react';
import Footer from './Footer'
import { Route } from 'react-router-dom'
import  './styles/Home.css'

class Container extends Component {
  render() {
    return (
      <div className="Home-screen">
        <header className="Home-screen-header">
            DucOS 1.0
        </header>
      </div>
    );
  }
}

export default Container;
