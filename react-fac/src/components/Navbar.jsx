import React from 'react';
import logo from '../assets/logo.svg'
const Navbar = () => {
  return (
    <nav className='navbar__container'>
      <img className='navbar__logo' src={logo} alt="React logo" />
      <h3>ReactFacts</h3>
      <h4>React Course - Project 1</h4>
    </nav>
  );
};

export default Navbar;