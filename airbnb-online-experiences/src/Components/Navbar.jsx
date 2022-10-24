import React from 'react';
import logo from '../Assets/airbnb-logo.svg'
import experiences from '../Assets/experiences.png'

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logo-container">
          <img className='logo' src={logo} alt="Airbnb logo" />
        </div>
        <div className="online-experiences-container">
          <img src={experiences} alt="" />
        </div>
        <div className="text-container">
          <h1>Online Experiences</h1>
          <p>
            Join unique interactive activities led by
            one-of-a-kind hosts—all without leaving home.
          </p>
        </div>

      </nav>
    </div>
  );
};

export default Navbar;