import React, { Component } from 'react';

class WeatherResults extends Component {
  render() {
    return (
      <div>
        <h1>The current weather in {this.props.currentCity} is {this.props.currentTemp}</h1>
      </div>
    );
  }
}

export default WeatherResults;