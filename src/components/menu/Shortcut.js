
import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'



// const path = './Tasks'
// const Tasks = require(`${path}`).default

class Shortcut extends Component {
  render() {
    const { name } = this.props
    const icon = require(`../../apps/${name}/icon.png`)
    return (

      <div className='app-shortcut'>
        <img src={icon} />
        <br></br>
        <Link to={`/apps/${name}`}>{name}</Link>
      </div>
    );
  }
}

export default Shortcut;
