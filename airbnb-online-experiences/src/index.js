import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Components/Navbar'
import Card from './Components/Card'
import data from './data.js'

const root = ReactDOM.createRoot(document.getElementById('root'));

const dataElements = data.map(item => {
  return <Card
    key={item.id}
    img={item.coverImg}
    rating={item.stats.rating}
    reviewCount={item.reviewCount}
    location={item.location}
    title={item.title}
    price={item.price}
    openSpots={item.openSpots}
  />
})

root.render(
  <React.StrictMode>
    <Navbar />
    <section className='cards-list'>
      {dataElements}
    </section>
  </React.StrictMode>
);  
