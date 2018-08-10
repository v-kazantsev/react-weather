import React, { Component } from 'react';
import 'App.css';
import Header from 'components/Header';
import { Container, Card, Spinner }  from 'elements';
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
    isLoading: false
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    const location = event.target.elements.location.value;
    this.setState({isLoading: true});
    const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`);
    const data = await apiCall.json();
    this.setState({
      weatherData: {
      ...this.state.weatherData,
      name: data.name,
      temperature: data.main.temp,
      pressure: data.main.pressure,
      humidity: data.main.humidity,
      description: data.weather[0].description
    }});
    this.setState({isLoading: false});
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
          {this.state.isLoading
          ? <Spinner />
          :
            this.state.weatherData.name && <Card>
                <h3>{this.state.weatherData.name}</h3>
                <hr/>
                <p>Temperature: {this.state.weatherData.temperature}&deg;C</p>
                <p>Pressure: {this.state.weatherData.pressure}</p>
                <p>Humidity: {this.state.weatherData.humidity}%</p>
                <p>Condition: {this.state.weatherData.description}</p>
            </Card>
          }
        </Container>
      </div>
    );
  }
}

export default App;
