import React from 'react';
import styled from 'styled-components';
import selectIcon from 'components/selectIcon';

const Pane = styled.div`
  flex: 1;
  margin: 2em 0.5em;
`;

const LeftPane = (props) => (
  
  <Pane>
    <img src={selectIcon(props.condition)}/>
  </Pane>
)
export default LeftPane;