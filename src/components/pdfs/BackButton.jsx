// Package dependencies
import React from 'react';
import styled from 'styled-components';

// Component dependencies
import Icon from 'Icon';

// Component for the controls on the pdf page
export default function BackButton(props) {
  const { goBack, full } = props;
  return (
    <Container onClick={goBack} full={full}>
      <Icon icon="back" />
      Go back
    </Container>
  );
}


const Container = styled.div`
  z-index: 10;
  font-size: 25px;
  background-color: rgba(0, 0, 0, .4);
  position: absolute;
  top: 10px;
  left:  10px;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  padding: 5px;
  color: white;
  display: ${(props) => (props.full ? 'none' : 'flex')};

  :hover{
    cursor: pointer;
  }
`;