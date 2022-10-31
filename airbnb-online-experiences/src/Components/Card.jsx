import React from 'react';
import star from '../Assets/star.svg'

const Card = (props) => {

  let badgeText
  if (props.openSpots === 0) {
    badgeText = 'SOLD OUT'
  } else if (props.location === "Online") {
    badgeText = 'OPEN SPOT'
  }

  return (
    <div className='card-container'>
      <div className="card">
        {/* Si existe un valor en badtext, hace display del div */}
        {
          badgeText
          &&
          <div className="card--badge">
            {badgeText}
          </div>
        }
        <img className='image' src={require(`../Assets/${props.img}`)} alt="" />

        <div className="rating">
          <img src={star} alt="" />
          <span >{props.rating}</span>
          <span className='gray'>(6)</span>
          <span className='gray'>• {props.location}</span>
        </div>

        <p className='title'>{props.title}</p>

        <p>
          <span className='bold'>
            From {props.price}$
          </span>
          / person
        </p>
      </div>
    </div>
  );
};

export default Card;