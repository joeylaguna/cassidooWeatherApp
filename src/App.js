import React, { Component } from 'react';
import axios from 'axios';
import WeatherQuery from './WeatherQuery.js';
import WeatherResults from './WeatherResults.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentTemp: '',
      currentCity: '',
    };

    this.handleCityQuery = this.handleCityQuery.bind(this);
  }

  handleCityQuery(city) {
    let url = `https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="${city}")&format=json`;
    axios.get(url)
      .then((response) => {
        let currentTemp = response.data.query.results.channel.item.condition.temp;
        let currentCity = response.data.query.results.channel.location.city;
        this.setState({
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
          Another weather app
        </div>
        <div className='content'>
          <WeatherQuery handleCityQuery = {this.handleCityQuery}/>
          {this.state.currentCity ? <WeatherResults currentTemp = {this.state.currentTemp} currentCity = {this.state.currentCity}/> : ''}
        </div>
      </div>
    );
  }
}

export default App;
