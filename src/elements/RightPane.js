import styled from 'styled-components';
import React from 'react';

const Pane = styled.div`
background: rgba(255, 255, 255, 0.5);
flex: 1;
height: 300px;
border-radius: 6px;
margin: 2em 0.5em;
`;

class RightPane extends React.Component {
  state = {
    histPressure: []
  }

  render() {
    return (
      <Pane>
        <p>Some data here</p>
      </Pane>
    )
  }
};

export default RightPane;