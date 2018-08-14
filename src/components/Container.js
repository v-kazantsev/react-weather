import React from 'react';
import styled from 'styled-components';
import img from 'images/plant-bg.jpg';
import { Card, LeftPane, RightPane } from 'elements';

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
    const {weatherData} = this.props;
    return (
      <Columns>
        {weatherData.name &&
        (<React.Fragment>
        <LeftPane condition = {weatherData.description} />
        <Card>
          <h3>{weatherData.name}</h3>
          <hr/>
          <p>Temperature: {weatherData.temperature}&deg;C</p>
          <p>Pressure: {weatherData.pressure}</p>
          <p>Humidity: {weatherData.humidity}%</p>
          <p>Condition: {weatherData.description}</p>
        </Card>
        <RightPane />
        </React.Fragment>)}
      </Columns>  
    )
  }
};
export default Container;