import React from 'react';

const Inputs = () => {
  return (
    <div className='form-container'>
      <form className='form' action="">
        <input className='input' type="text" id="fname" name="fname" placeholder='Up Text' />
        <input className='input' type="text" id="lname" name="lname" placeholder='Down Text' />
      </form>
      <button className='btn-getImg'>Get a new meme image</button>
    </div>
  );
};

export default Inputs;