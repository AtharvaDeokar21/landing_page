// src/App.js

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
// import Features from './components/Features';
// import Technology from './components/Technology';
// import HowItWorks from './components/HowItWorks';
// import Explore from './components/Explore';
import Farmers from './components/Farmers';
import Companies from './components/Companies';
import OurProducts from './components/OurProducts';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Farmers />
      <Companies />
      <OurProducts />
      <About />
    </div>
  );
}

export default App;
