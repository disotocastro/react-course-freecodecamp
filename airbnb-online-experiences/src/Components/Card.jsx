import React from 'react';
import star from '../Assets/star.svg'

const Card = (props) => {
  return (
    <div>
      <div className="card">

        <img className='image' src={props.img} alt="" />

        <div className="rating">
          <img src={star} alt="" />
          <span >{props.rating}</span>
          <span className='gray'>(6)</span>
          <span className='gray'>• {props.country}</span>
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