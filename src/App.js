// src/App.js

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Technology from './components/Technology';
import HowItWorks from './components/HowItWorks';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <HowItWorks />
      <Technology />
    </div>
  );
}

export default App;
