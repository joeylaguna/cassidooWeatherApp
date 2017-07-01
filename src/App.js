import React, { Component } from 'react';
import WeatherQuery from './WeatherQuery.js';
import WeatherResults from './WeatherResults.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.handleCityQuery = this.handleCityQuery.bind(this);
  }

  handleCityQuery(city) {
    console.log(`${city}`);
  }

  render() {
    return (
      <div>
        <WeatherQuery handleCityQuery = {this.handleCityQuery}/>
        <WeatherResults />
      </div>
    );
  }
}

export default App;
