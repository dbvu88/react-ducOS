
import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import Shortcut from '../components/menu/Shortcut'

class Menu extends Component {
  
  render = () => {

    // console.dir(this.props)
    const { apps } = this.props
    return (
      <div className="Menu-screen">
        { apps.map((app, index) => <Shortcut name={app} key={app}/>) }

      </div>
    );
  }
}

export default Menu;
