// Package dependencies
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Component dependences
import colors from 'Colors';

// Component for the controls on the pdf page
export default function ScreenButton(props) {
  const { perLoaded, progDisplay } = props;


  return (
    <Container display={progDisplay}>
      <Text>
        {`${perLoaded} / 5 MB Loaded...`}
      </Text>
    </Container>
  );
}

// Prop type verification
ScreenButton.propTypes = {
  perLoaded: PropTypes.func.isRequired,
  progDisplay: PropTypes.bool.isRequired,
};

// Styling
const Container = styled.div`
  display: ${(props) => (props.display ? 'block' : 'none')};
  display: flex;
  position: absolute;
  width: 100%;
  height: 70%;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  font-family: 'Montserrat', sans-serif;
  color: white;
  background-color: ${colors.LITS.color};
  font-size: 40px;
  font-weight: 900;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 0 20px black;
`;
