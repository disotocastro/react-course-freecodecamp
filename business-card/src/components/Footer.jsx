import React from 'react';
import Facebook from '../assets/fb-icon.png';
import Twitter from '../assets/twitter-icon.png';
import GitHub from '../assets/gh-icon.png';
import Instagram from '../assets/ig-icon.png';

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="img-container">
          <img src={Twitter} alt="" />
          <img src={Facebook} alt="" />
          <img src={Instagram} alt="" />
          <img src={GitHub} alt="" />
        </div>
      </footer>
    </div>
  );
};

export default Footer;