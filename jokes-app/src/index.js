import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Joke from './Joke';
import JokesData from './jokesData'




const root = ReactDOM.createRoot(document.getElementById('root'));
const jokesElements = JokesData.map(joke => {

  return <Joke setup={joke.setup} punchline={joke.punchline} />

})
root.render(
  <React.StrictMode>
    {jokesElements}
  </React.StrictMode>
);
