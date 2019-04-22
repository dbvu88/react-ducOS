
import React, { Component } from 'react';
import Footer from './Footer'
import { Route } from 'react-router-dom'
import  './styles/Home.css'
import Clock from '../components/home/Clock'

class Container extends Component {
  render() {
    return (
      <div className="Home-screen">
        <header className="Home-screen-header">
            DucOS
        </header>
        <Clock />
      </div>
    );
  }
}

export default Container;
