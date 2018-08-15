import React, { Component } from 'react';
import 'App.css';
import Header from 'components/Header';
import { Spinner, Error }  from 'elements';
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
    const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`);
    if (apiCall.ok) {
    const data = await apiCall.json();
    this.setState({
      value: '',
      weatherData: {
        ...this.state.weatherData,
        name: data.name,
        temperature: data.main.temp,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        description: data.weather[0].description
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
          {this.state.isLoading
          ? <Spinner />
          : (this.state.error && <Error>Error: {this.state.error}</Error>) ||
            <Container weatherData = {this.state.weatherData} />
          }
      </div>
    );
  }
}

export default App;
