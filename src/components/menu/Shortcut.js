
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Shortcut.css'
// const path = './Tasks'
// const Tasks = require(`${path}`).default

class Shortcut extends Component {
  render() {
    const { name, path } = this.props
    const icon = require(`../../apps/${path}/icon.png`)
    return (
      <div className='application-shortcut'>
        <Link to={`/apps/${path}`}>
            <img src={icon} />
            <br></br>{name}
        </Link>
      </div>
    );
  }
}

export default Shortcut;
