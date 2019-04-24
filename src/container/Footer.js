
import React from 'react';
import { NavLink } from 'react-router-dom'
import './styles/Footer.css' 

const Footer = () => {
  return (
    <footer className="container-footer">
      <nav className="container-nav">
          <NavLink 
          className="container-nav-item" 
          activeClassName="container-nav-active" 
          exact to='/'>HOME</NavLink>
          <NavLink 
          className="container-nav-item"
          activeClassName="container-nav-active" 
          to='/menu'>MENU</NavLink>
          <NavLink 
          className="container-nav-item"
          activeClassName="container-nav-active" 
          to='/tasks'>TASKS</NavLink>
      </nav>


    </footer>
  );
}

export default Footer;
