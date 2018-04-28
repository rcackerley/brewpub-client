import React from 'react';
import Navbar from './components/navigation/Navbar';
import HeroSlider from './components/heros/HeroSlider';
import MainContentWell from './components/body/MainContentWell';
import Footer from './components/footer/Footer';

let App = () =>
  <div>
    <Navbar />
    <HeroSlider />
    <MainContentWell />
    <Footer />
  </div>
export default App;
