import './App.css';
import axios from 'axios';
import React, { useState } from 'react';
import Weather from './components/Weather';

const App =() => {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather />
    </div>
  );
}

export default App;
