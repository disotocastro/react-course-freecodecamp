import React from 'react';

const Joke = (props) => {

  // const colors = ["Red", "Orange", "Yellow", "Green", "Blue",]
  // {
  //   colors.map((color) => {
  //     return <h1>{color} </h1>
  //   })
  // }


  return (
    <div>
      <h3>{props.setup}</h3>
      <h4>{props.punchline}</h4>
    </div>
  );
};

export default Joke;