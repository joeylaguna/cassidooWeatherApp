import React, { Component } from 'react';
import axios from 'axios';
import WeatherQuery from './WeatherQuery.js';
import WeatherResults from './WeatherResults.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentCode: '',
      currentTemp: '',
      currentCity: ''
    };

    this.handleCityQuery = this.handleCityQuery.bind(this);
  }

  handleCityQuery(city) {
    let url = `https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="${city}")&format=json`;
    axios.get(url)
      .then((response) => {
        let currentCode = response.data.query.results.channel.item.condition.code;
        let currentTemp = response.data.query.results.channel.item.condition.temp;
        let currentCity = response.data.query.results.channel.location.city;
        this.setState({
          currentCode: currentCode,
          currentTemp: currentTemp,
          currentCity: currentCity
        });
      })
      .catch((error) => {
        console.log('error getting city weather!');
      });
  }

  render() {
    return (
      <div className='weatherModal'>
        <div className='title'>
          <h3>Another weather app</h3>
        </div>
        <div className='content'>
          <WeatherQuery handleCityQuery = {this.handleCityQuery}/>
          {this.state.currentCity ? <WeatherResults currentTemp = {this.state.currentTemp} currentCity = {this.state.currentCity} currentCode = {this.state.currentCode} /> : ''}
        </div>
      </div>
    );
  }
}

export default App;
