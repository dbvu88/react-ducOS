
import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import myApp from '../hello-world.png'
import App from '../apps/hello-world/App'

class Menu extends Component {
  
  render = () => {
    console.dir(this.props)
    const { apps } = this.props
    return (
      <div className="Menu-screen">{
        apps.map(app => (
          <Link to={`apps/${app.name}`} key={app.name}>
            <img src={myApp} />
            <br></br>
            {app.title}
          </Link>
        ))
      }</div>
    );
  }
}

export default Menu;
