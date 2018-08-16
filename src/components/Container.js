import React from 'react';
import styled from 'styled-components';
import img from 'images/plant-bg.jpg';
import { Card, LeftPane, RightPane, Spinner } from 'elements';

const Columns =  styled.div`
  height: 75vh;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: flex-start;
  background-image: url(${img});
  background-size: cover;
  opacity: 0.6;
`;

class Container extends React.Component {
  render() {
    const {weatherData, isLoading} = this.props;
    if (isLoading) {
      return <Columns><Spinner /></Columns>
    } else {
      return (
        <Columns>
        { weatherData.description && <LeftPane condition = {weatherData.description} /> }
        { weatherData.name &&
        <Card>
          <h3>{weatherData.name}</h3>
          <hr/>
          <p>Temperature: {weatherData.temperature}&deg;C</p>
          <p>Pressure: {weatherData.pressure}</p>
          <p>Humidity: {weatherData.humidity}%</p>
          <p>Wind: {weatherData.wind}m/s</p>
          <p>Condition: {weatherData.description}</p>
        </Card>}
        { weatherData.name && <RightPane /> }
        </Columns>)}
  }
};
export default Container;