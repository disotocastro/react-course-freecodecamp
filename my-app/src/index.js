import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Body from './Body';
import Footer from './Footer';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Body />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);