import React, { Component } from 'react';
import WeatherQuery from './WeatherQuery.js';
import WeatherResults from './WeatherResults.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <WeatherQuery />
        <WeatherResults />
      </div>
    );
  }
}

export default App;
