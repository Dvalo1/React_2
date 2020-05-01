import React from 'react';
import styled from 'styled-components';
import Countries from '../../components/Post/Countries';


// css import
import postClasses from './Post.module.css';

const styles = {
  border: '4px limegreen solid',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: 'yellowgreen',
  },
  '@media screen and (max-width: 500px)': {
    backgroundColor: 'seagreen',
    borderColor: 'lime',
    color: '#fff',
  },
};

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

function Posts(props) {
  return (
    <div className="Post">
      <div className={`row flex-column p-4 posts ${postClasses.posts}`}>
        <h3 className={postClasses.title}>#StopCov19</h3>
        <hr />
        <Countries />
      </div>
    </div>
  );
}

export default Posts;