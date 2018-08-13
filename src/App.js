import React, { Component } from 'react';
import 'App.css';
import Header from 'components/Header';
import { Container, Card, Spinner, Error }  from 'elements';
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
      description: data.weather[0].description
    }});
    this.setState({isLoading: false, error: ''});
  } else {
    this.setState({value: '', isLoading: false, error: 'City not found'});
  }}
  ;
  handleChange = (event) => {
    this.setState({value: event.target.value});
  };
  render() {
    const {temperature, pressure, humidity, description} = this.state.weatherData;
    return (
      <div>
        <Header
          value={this.state.value}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <Container>
          {this.state.isLoading
          ? <Spinner />
          : (this.state.error && <Error>Error: {this.state.error}</Error>) ||
            (this.state.weatherData.name && <Card>
              <h3>{this.state.weatherData.name}</h3>
              <hr/>
              <p>Temperature: {temperature}&deg;C</p>
              <p>Pressure: {pressure}</p>
              <p>Humidity: {humidity}%</p>
              <p>Condition: {description}</p>
            </Card>)
          }
        </Container>
      </div>
    );
  }
}

export default App;
