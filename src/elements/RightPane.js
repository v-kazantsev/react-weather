import styled from 'styled-components';
import React from 'react';
import ChartistGraph from 'react-chartist';

const Pane = styled.div`
background: rgba(255, 255, 255, 0.5);
flex: 1;
height: 300px;
border-radius: 6px;
margin: 2em 0.5em;
`;

class RightPane extends React.Component {
  render() {
    const chartData = {
      series: [[1030, 1010, 1000, 990, 980]],
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
    };
    const type = 'Line';
    const chartOptions = {
      low: 900,
      showArea: false,
    }
    return (
      <Pane>
        <ChartistGraph data = {chartData} options = {chartOptions} type = {type} />
      </Pane>
    )
  }
};

export default RightPane;