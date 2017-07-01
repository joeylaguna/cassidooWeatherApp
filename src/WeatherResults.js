import React, { Component } from 'react';

class WeatherResults extends Component {
  render() {
    return (
      <div className='weatherResults'>
        <p>The current weather in {this.props.currentCity} is {this.props.currentTemp}</p>
      </div>
    );
  }
}

export default WeatherResults;