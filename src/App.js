import React from 'react';
import styled from 'styled-components';
import Covid19 from './containers/Post/Covid19';
import './App.css';

const styles = {
  border: '6px red solid',
  cursor: 'pointer',
};

function taggedTemplate(text) {
  console.log(text.raw[0]);
  return `This is a taggedTemplate, ${text.raw[0]
    .split('')
    .reverse('')
    .join('')}`;
}

const MyDiv = styled.div`
  border: 4px limegreen solid;
  cursor: pointer;
  padding: ${(props) => props.padding};
  &:hover {
    background-color: yellowgreen;
  }
`;

MyDiv.defaultProps = {
  padding: '20px',
};

function App() {
  const myText = taggedTemplate`My Message Text`;
  return (
    // <StyleRoot>
    <div className="container">
      <div className="row p-3 flex-column">
        <Covid19 />
      </div>
    </div>
    // </StyleRoot>
  );
}

export default App;