// src/App.js

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section id="about" className="min-h-screen bg-[#1B263B] text-[#C2CAAA] flex flex-col items-center justify-center p-10">
        <h2 className="text-2xl font-semibold mb-4">About Us</h2>
        <p className="text-center max-w-2xl">
          Our platform utilizes blockchain technology to ensure secure, transparent, and efficient contract farming for all stakeholders. By connecting farmers, companies, and the government, we create a stable market environment.
        </p>
      </section>
    </div>
  );
}

export default App;
