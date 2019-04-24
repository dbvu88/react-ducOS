
import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import Shortcut from '../components/menu/Shortcut'

class Menu extends Component {
  
  state = {
    style: null
  }
  // componentWillUnmount() {
  //   this.setState({
  //     style: {
  //       opacity: 0,
  //       transition: 'opacity 1s'
  //     }
  //   })
  // }

  render = () => {

    // console.dir(this.props)
    const { apps } = this.props
    return (
      <div className="Menu-screen" style={this.state.style}>
        { apps.map((app, index) => <Shortcut {...app} key={app.path}/>) }
      </div>
    );
  }
}

export default Menu;
