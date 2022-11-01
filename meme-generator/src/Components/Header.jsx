import React from 'react';
import logo from '../Assets/Logo.svg'

const Header = () => {
  return (
    <div className='header__container'>
      <img src={logo} alt="" />
      <p className='header__text'>React Course - Project 3</p>
    </div>
  );
};

export default Header;