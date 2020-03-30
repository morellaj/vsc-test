// Package dependencies
import React from 'react';
import styled from 'styled-components';

// Component dependencies
import colors from 'Colors';

// Component for the controls on the pdf page
export default function ScreenButton(props) {
  const { perLoaded } = props;


  return (
    <Container id="progress">
      <Text>
        {`${perLoaded}% Loaded...`}
      </Text>
    </Container>
  );
}

// Styling
const Container = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 70%;
  justify-content: center;
  align-items: flex-start;
  padding-top: 20px;
`;

const Text = styled.div`
  color: white;
  background-color: ${colors.LITS.color};
  font-size: 40px;
  font-weight: 900;
  padding: 20px;
  ;
  box-shadow: 0 1px 1px black, 0 2px 5px rgba(0,0,0,0.6), 0 4px 10px rgba(0,0,0,0.2);
  border-color: rgba(0,0,0,0.2) rgba(0,0,0,0.35) rgba(0,0,0,0.55);

  @media (max-width: 1000px) {
    font-size: 30px;
    font-weight: 700;
    padding: 10px;
  }

  @media (max-width: 500px) {
    font-size: 20px;
    font-weight: 500;
  }
`;
