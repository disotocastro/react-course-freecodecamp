import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Components/Navbar'
import Card from './Components/Card'

import KatieZ from './Assets/katie-zaferes.png'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Card
      img={KatieZ}
      rating="5.0"
      reviewCount={6}
      country="USA"
      title="Life lessons with Katie Zaferes"
      price={136}
    />
  </React.StrictMode>
);  
