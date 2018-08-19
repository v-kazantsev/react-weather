import React from 'react';
import styled from 'styled-components';
import { Cloudy, Default, Misty, Partly, Rainy, Snow, Sunny, Wind } from 'images';

const Pane = styled.div`
  flex: 1;
  margin: 2em 0.5em;
`;
const selectIcon = (condition) => {
  const str = condition;
  switch (true) {
    case /clear/i.test(str):
    return Sunny;
    case /cloud/i.test(str):
    return Partly;
    case /scattered/i.test(str):
    return Cloudy;
    case /fog/i.test(str):
    return Misty;
    case /rain/i.test(str):
    return Rainy;
    case /snow/i.test(str):
    return Snow;
    case /wind/i.test(str):
    return Wind;
    default:
    return Default;
  }
};

const LeftPane = (props) => (
  
  <Pane>
    <img src={selectIcon(props.condition)}/>
  </Pane>
)
export default LeftPane;