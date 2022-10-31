import React from 'react';
import img from '../Assets/placeholder.png'
import location from '../Assets/location.png'

const Cards = () => {
  return (
    <div className='card--container'>
      <img src={img} alt="" />

      <div className="card--info">
        <div className="card-location">
          <img className='location-img' src={location} alt="" />
          <h3 className="card--location">Pais</h3>
          <a className='card--link' href="http://google.com" target="_blank" rel="noopener noreferrer">View on Google Maps</a>
        </div>

        <h1 className='card--name'>Mount Fuji</h1>
        <h4 className='card--date'>12 Jan, 2021 - 24 Jan, 2021</h4>
        <p className='card--description'>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>

      </div>
    </div>
  );
};

export default Cards;