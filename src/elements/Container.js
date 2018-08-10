import styled from 'styled-components';
import img from 'images/plant-bg.jpg';

export default styled.div`
  height: 75vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  background-image: url(${img});
  background-size: cover;
  opacity: 0.6;
`;