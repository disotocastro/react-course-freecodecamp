import React from 'react';
import memesData from '../memesData';
const Inputs = () => {

  let url


  const [memeImage, setMemeImage] = React.useState("")


  function getMemeImage() {
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    url = memesArray[randomNumber].url
    setMemeImage(url)
  }

  return (
    <div className='form-container'>
      <p>{url}</p>
      <div className='form' action="">
        <input className='form__input' type="text" placeholder='Top text' />
        <input className='form__input' type="text" placeholder='Bottom Text' />
      </div>
      <button onClick={getMemeImage} className='form__btn'>Get a new meme image</button>
      <img src={memeImage} alt="asdasd" />
    </div>
  );
};

export default Inputs;