import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Components/Header';
import Cards from './Components/Cards';
import data from './data.js'

const dataElements = data.map(item => {
  return (
    <Cards
      item={item}
    />
  )
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <section className='places'>
      {dataElements}
    </section>
  </React.StrictMode>
);  