import React from 'react';
import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import About from './components/About';
import Features from './components/Features';
import History from './components/History';
import Quote from './components/Quote';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <About />
      <Features />
      <History />
      <Quote />
      <Footer />
    </div>
  );
}

export default App;
