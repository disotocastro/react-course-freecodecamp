import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Components/Navbar'
import Card from './Components/Card'
import data from './data.js'

const root = ReactDOM.createRoot(document.getElementById('root'));

const dataElements = data.map(item => {
  return (
    <Card
      key={item.id}
      item={item}
    />
  )
})

root.render(
  <React.StrictMode>
    <Navbar />
    <section className='cards-list'>
      {dataElements}
    </section>
  </React.StrictMode>
);  
