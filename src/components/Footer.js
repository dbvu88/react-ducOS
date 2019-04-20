
import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom'
import Menu from './Menu'
import Home from './Home'

const Footer = () => {
    return (
      <div className="Footer">
        <nav>
            <NavLink exact to='/'>Home</NavLink>

            <NavLink to='/Menu'>Menu</NavLink>

        </nav>


      </div>
    );
}

export default Footer;
