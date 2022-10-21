import React from 'react';
import picture from '../assets/profile-picture.png'
import email from '../assets/email-btn.png'
import linkedin from '../assets/linkedin-btn.png'


const Header = () => {
  return (
    <div className='header-container'>
      <img className='picture' src={picture} alt="User" />
      <div className='title'>
        <h2>Laura Smith</h2>
        <h5>Frontend Developer</h5>
        <h6>laurasmith.website</h6>
      </div>
      <div className='contact'>
        <img src={email} alt="" />
        <img src={linkedin} alt="" />
      </div>
    </div>
  );
};

export default Header;