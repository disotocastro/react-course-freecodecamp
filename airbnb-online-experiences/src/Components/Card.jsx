import React from 'react';
import star from '../Assets/star.svg'
import image from '../Assets/image.png'

const Card = () => {
  return (
    <div>
      <div className="card">

        <img className='image' src={image} alt="" />

        <div className="rating">
          <img src={star} alt="" />
          <span >5.0</span>
          <span className='gray'>(6)</span>
          <span className='gray'>• USA</span>
        </div>

        <p className='title'>Life lessons with Katie Zaferes</p>
        <p>
          <span className='bold'>
            From $140
          </span>
          / person
        </p>

      </div>
    </div>
  );
};

export default Card;