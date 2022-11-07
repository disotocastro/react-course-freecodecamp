import React, { useState } from 'react';
import memesData from '../memesData';
const Inputs = () => {

  const [allMemeImages, setAllMemeImages] = useState(memesData)

  const [meme, setMeme] = React.useState({
    topText: "",
    botText: "",
    randomImg: "https://i.imgflip.com/30b1gx.jpg",
  })


  let url
  const [memeImage, setMemeImage] = React.useState()

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    url = memesArray[randomNumber].url
    setMeme(prevState => ({
      ...prevState,
      randomImg: url
    }))
  }








  return (
    <div className='form-container'>
      <p>{url}</p>
      <div className='form' action="">
        <input className='form__input' type="text" placeholder='Top text' />
        <input className='form__input' type="text" placeholder='Bottom Text' />
      </div>
      <button onClick={getMemeImage} className='form__btn'>Get a new meme image</button>
      <img src={meme.randomImg} className="meme__image" alt="asdasd" />
    </div>
  );
};

export default Inputs;