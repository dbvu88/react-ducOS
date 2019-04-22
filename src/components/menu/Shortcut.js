
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Shortcut.css'
// const path = './Tasks'
// const Tasks = require(`${path}`).default

class Shortcut extends Component {
  render() {
    const { name } = this.props
    const icon = require(`../../apps/${name}/icon.png`)
    return (

      <div className='app-shortcut'>
        <Link to={`/apps/${name}`}>
            <img src={icon} />
            <br></br>{name}
        </Link>
      </div>
    );
  }
}

export default Shortcut;
