import React from 'react';
import './App.scss';

import Hero from './components/hero'
import When from './components/when'
import Location from './components/location'
import Features from './components/features'
import Gifts from './components/gifts'
import RSVP from './components/rsvp'

function App() {
  return (
    <div className="App">

      <Hero/>
      <When />
      <Location />
      <Features />
      <Gifts />
      <RSVP />
      
    </div>
  );
}

export default App;
