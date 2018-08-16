import React, { Component } from 'react';
import 'App.css';
import Header from 'components/Header';
import { Error }  from 'elements';
import Container from 'components/Container';
import { API_KEY } from './.API_KEY';

class App extends Component {
  state = {
    value: '',
    weatherData: {
      name: '',
      temperature: '',
      pressure: '',
      humidity: '',
      description: ''
    },
    isLoading: false,
    error: ''
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    const location = event.target.elements.location.value;
    this.setState({isLoading: true});
    const apiCall = await fetch(`https://api.weatherbit.io/v2.0/current?city=${location}&key=${API_KEY}`);
    console.log(apiCall)
    if (apiCall.ok) {
    const data = await apiCall.json();
    this.setState({
      value: '',
      weatherData: {
        ...this.state.weatherData,
        name: data.data[0].city_name,
        temperature: data.data[0].temp,
        pressure: data.data[0].pres,
        humidity: data.data[0].rh,
        wind: data.data[0].wind_spd,
        description: data.data[0].weather.description
      },
      isLoading: false,
      error: ''
  })
  } else {
    this.setState({value: '', isLoading: false, error: 'City not found'});
  }}
  ;
  handleChange = (event) => {
    this.setState({value: event.target.value});
  };
  render() {
    return (
      <div>
        <Header
          value={this.state.value}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
          {this.state.error
           ? <Error>Error: {this.state.error}</Error>
           : <Container weatherData = {this.state.weatherData} isLoading = {this.state.isLoading} />}
      </div>
    );
  }
}

export default App;
