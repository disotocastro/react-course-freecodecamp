import React from 'react';

const Joke = (props) => {
  return (
    <div>
      <h1>{props.setup} {props.punchline}</h1>
    </div>
  );
};

export default Joke;