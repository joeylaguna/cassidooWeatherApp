import React, { Component } from 'react';
import './css/weather-icons.min.css';
import './css/weather-icons-wind.min.css';

class WeatherQuery extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleCityQuery(this.state.value);
  }

  render() {
    return (
      <div className='weatherQuery'>
        <p>Enter a city or zip code!</p>
        <form onSubmit = {this.handleSubmit}>
          <input type='text' value={this.state.value} onChange={this.handleChange} placeholder='Enter city'></input>
          <br/>
          <br/>
          <input type='submit' value='Go!' className='button'></input>
        </form>
      </div>
    );
  }
}

export default WeatherQuery;