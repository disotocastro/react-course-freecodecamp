import React from 'react';

const Inputs = () => {
  return (
    <div className='form-container'>
      <form className='form' action="">
        <input className='form__input' type="text" placeholder='Top text' />
        <input className='form__input' type="text" placeholder='Bottom Text' />
      </form>
      <button className='form__btn'>Get a new meme image</button>
    </div>
  );
};

export default Inputs;