import React, { Component } from 'react';
import 'App.css';
import Header from 'components/Header';
import { Container, Card }  from 'elements';
import { API_KEY } from './.API_KEY';

class App extends Component {
  state = {
    value: '',
    weatherData: {
      name: '',
      temperature: '',
      pressure: '',
      description: ''
    },
    isLoading: false
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    const location = event.target.elements.location.value;
    const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`);
    const data = await apiCall.json();
    this.setState({
      weatherData: {
      ...this.state.weatherData,
      name: data.name,
      temperature: data.main.temp,
      pressure: data.main.pressure,
      description: data.weather[0].description
    }});
  };
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
        <Container>
          {this.state.weatherData.name && <Card>
              <h3>{this.state.weatherData.name}</h3>
              <hr/>
              <p>Temperature: {this.state.weatherData.temperature}</p>
              <p>Pressure: {this.state.weatherData.pressure}</p>
              <p>Condition: {this.state.weatherData.description}</p>
          </Card>}
        </Container>
      </div>
    );
  }
}

export default App;
