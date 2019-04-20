
import React from 'react';
import { NavLink } from 'react-router-dom'
import './styles/Footer.css' 

const Footer = () => {
  return (
    <div className="home-screen-footer">
      <nav className="home-screen-nav">
          <NavLink 
          className="home-screen-nav-item" 
          activeClassName="home-screen-nav-active" 
          exact to='/'>Home</NavLink>
          <NavLink 
          className="home-screen-nav-item"
          activeClassName="home-screen-nav-active" 
          to='/menu'>Menu</NavLink>
          <NavLink 
          className="home-screen-nav-item"
          activeClassName="home-screen-nav-active" 
          to='/tasks'>Tasks</NavLink>
      </nav>


    </div>
  );
}

export default Footer;
