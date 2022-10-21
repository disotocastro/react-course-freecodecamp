import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './components/Main'
import Navbar from './components/Navbar'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Main />
  </React.StrictMode>
); 