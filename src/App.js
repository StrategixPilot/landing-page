import React from 'react';
import './App.css'; // General styling for the whole app
import Header from './components/Header';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Features />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
