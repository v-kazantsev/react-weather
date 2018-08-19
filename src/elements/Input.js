import styled from 'styled-components';

export default styled.input`
  flex: 3;
  margin-right: 0;
  border: 2px solid teal;
  border-right: none;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  font-size: 1.5rem;
  padding: 0.8em;
  ::-webkit-input-placeholder { font-size: 1rem; }
  ::-moz-placeholder { font-size: 1rem; }
  input:-moz-placeholder { font-size: 1rem; }
`;