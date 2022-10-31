import React from 'react';

const Cards = () => {
  return (
    <div className='card--container'>
      <img src={''} alt="" />

      <div className="card--info">
        <div className="card-location">
          <img src={''} alt="" />
          <h3 className="card--location">Nombre</h3>
          <a className='card--link' href="http://google.com" target="_blank" rel="noopener noreferrer">View on Google Maps</a>
        </div>

        <h1 className='card--name'>Name</h1>
        <h4 className='card--date'>Date</h4>
        <p className='card--description'>Blablabla</p>

      </div>
    </div>
  );
};

export default Cards;