
import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

class Menu extends Component {
  render() {
    return (
      <div className="Menu-screen">
        My Apps
        {/* <nav>
            <NavLink>Menu</NavLink>
        </nav>

        <Route to='/Menu' component={Menu}></Route> */}
      </div>
    );
  }
}

export default Menu;
