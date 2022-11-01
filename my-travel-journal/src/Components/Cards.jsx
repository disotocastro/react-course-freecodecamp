import React from 'react';
import location from '../Assets/location.png'

const Cards = (props) => {
  return (
    <div className='card--container'>
      <img className='card-photo' src={require(`../Assets/${props.item.image}`)} alt="" />

      <div className="card--info">

        <div className="card-location">
          <img className='location-img' src={location} alt="" />
          <h3 className="card--location">{props.item.location}</h3>
          <a className='card--link' href={props.item.googleMapsUrl} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
        </div>

        <h1 className='card--name'>{props.item.title}</h1>
        <h4 className='card--date'>{props.item.startDate}</h4>

        <p className='card--description'>
          {props.item.description}
        </p>

      </div>
    </div>
  );
};

export default Cards;