import React from 'react';
import logo from '../Assets/logo.svg'

const Header = () => {
  return (
    <div>
      <div className="header--container">
        <img src={logo} alt="" />
        <h3>my-travel-journal</h3>
      </div>
    </div>
  );
};

export default Header;