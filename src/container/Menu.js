
import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import myApp from '../hello-world.png'
import App from '../apps/hello-world/App'
// import 

class Menu extends Component {
  
  render = () => {

    // console.dir(this.props)
    const { apps } = this.props
    return (
      <div className="Menu-screen">{
        apps.map(app => (
          <div
          className='shortcut'
          key={app.name}>
            <Link 
            to={`apps/${app.name}`} >
              <img src={myApp} />
              <br></br>
              {app.title}
            </Link>
          </div>
        ))

      }</div>
    );
  }
}

export default Menu;
