import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Joke from './Joke';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Joke setup="Hola" punchline="Mundo" />
  </React.StrictMode>
);
