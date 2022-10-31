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
        <img className='image' src={require(`../Assets/${props.item.coverImg}`)} alt="" />

        <div className="rating">
          <img src={props.item.star} alt="" />
          <span >{props.item.rating}</span>
          <span className='gray'>(6)</span>
          <span className='gray'>• {props.item.location}</span>
        </div>

        <p className='title'>{props.item.title}</p>

        <p>
          <span className='bold'>
            From {props.item.price}$
          </span>
          / person
        </p>
      </div>
    </div>
  );
};

export default Card;


// img={item.coverImg}
// rating={item.stats.rating}
// reviewCount={item.reviewCount}
// location={item.location}
// title={item.title}
// price={item.price}
// openSpots={item.openSpots}