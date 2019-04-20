
import React from 'react';
import { NavLink } from 'react-router-dom'
import './styles/Footer.css' 

const Footer = () => {
    return (
      <div className="home-screen-footer">
        <nav className="home-screen-nav">
            <NavLink exact to='/'>Home</NavLink>
            <NavLink to='/Menu'>Menu</NavLink>
            <NavLink to='/Menu'>Tasks</NavLink>
        </nav>


      </div>
    );
}

export default Footer;
