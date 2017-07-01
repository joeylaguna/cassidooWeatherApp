import React, { Component } from 'react';

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
      <div>
        <form onSubmit = {this.handleSubmit}>
          <input type='text' value={this.state.value} onChange={this.handleChange} placeholder='Enter city'></input>
        </form>
      </div>
    );
  }
}

export default WeatherQuery;