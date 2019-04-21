
import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import logo from '../../apps/about/icon.png'



// const path = './Tasks'
// const Tasks = require(`${path}`).default

class Shortcut extends Component {
  render() {
    console.log(this.props)
    const { name } = this.props
    // const App = require(`../../apps/${name}/app`).default

    return (
      // <div className='shortcut' key={app.name}>
      //   <Link to={`apps/${app.name}`} >
      //     <img src={myApp} />
      //     <br></br>
      //     {app.title}
      //   </Link>
      // </div>
      <div>
        <Link to='/apps/about'>About</Link>
        {name}
      </div>
    );
  }
}

export default Shortcut;
