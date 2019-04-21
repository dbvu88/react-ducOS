
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
          exact to='/'>Home</NavLink>
          <NavLink 
          className="container-nav-item"
          activeClassName="container-nav-active" 
          to='/menu'>Menu</NavLink>
          <NavLink 
          className="container-nav-item"
          activeClassName="container-nav-active" 
          to='/tasks'>Tasks</NavLink>
      </nav>


    </footer>
  );
}

export default Footer;
