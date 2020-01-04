// Package dependencies
import React from 'react';
import styled from 'styled-components';

// Component dependencies
import Slides from './Slides';
import TryButton from './TryButton';


// Constants
const pictureList = [8, 34, 39, 12, 10, 21, 27, 5, 20, 18, 22, 31];

const fadeProperties = {
  duration: 5000,
  transitionDuration: 1000,
  arrows: false,
};

/** ********************************************* */
// Component for displaying the home page
/** ********************************************* */
export default function IntroParagraph() {
  return (
    <Container>
      <IntroTextContainer>
        <Pic src="../../assets/HomeText.png" />
        <TryButtonContainer>
          <TryButton />
        </TryButtonContainer>
      </IntroTextContainer>
      <Slides pictureList={pictureList} type="Home" fadeProperties={fadeProperties} />
    </Container>
  );
}

// Styling
const Container = styled.div`
  background-color: rgba(0, 0, 0, .2);
`;

const IntroTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position:absolute;
  width: 100%;
  z-index: 3;
  overflow: hidden;
`;


const TryButtonContainer = styled.div`
  position: absolute;
  bottom: 10px;
`;

const Pic = styled.img`
  width: 100%;
  max-width: 1100px;
`;
