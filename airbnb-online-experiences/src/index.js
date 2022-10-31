import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Components/Navbar'
import Card from './Components/Card'
import data from './data.js'

const root = ReactDOM.createRoot(document.getElementById('root'));

const dataElements = data.map(item => {
  return <Card
    img={item.coverImg}
    rating={item.stats.rating}
    reviewCount={item.reviewCount}
    location={item.location}
    title={item.title}
    price={item.price}
  />
})

root.render(
  <React.StrictMode>
    <Navbar />
    {dataElements}
  </React.StrictMode>
);  
