import React, { Component } from 'react';
import getWeatherIcon from './getWeatherCode.js'

class WeatherResults extends Component {
  constructor(props) {
    super(props);
    this.updateIcon = this.updateIcon.bind(this);
  }

  updateIcon(code){
    return getWeatherIcon(code);
  }

  render() {
    let icon = this.updateIcon(this.props.currentCode);
    return (
      <div className='weatherResults'>
        <p>The current temperature in {this.props.currentCity} is {this.props.currentTemp} degrees fahrenheit.</p>
        <i className={icon}></i>
      </div>
    );
  }
}

export default WeatherResults;