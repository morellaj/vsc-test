// Package dependencies
import React from 'react';
import styled from 'styled-components';
import loadable from '@loadable/component';

// Component dependencies
import TryButton from './TryButton';
//const Slides = loadable(() => import('./Slides'));
import Slides from './Slides';

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
    <Container >
      <SlidesContainer>
        <Slides pictureList={pictureList} type="Home" fadeProperties={fadeProperties} />
        <TryButtonContainer>
          <TryButton/>
        </TryButtonContainer>
        <IntroTextContainer>
          <IntroText>Online books that inspire kids to make good choices!</IntroText>
        </IntroTextContainer>
      </SlidesContainer>
    </Container>
  );
}

// Styling
const Container = styled.div`
  background-color: rgba(0, 0, 0, .2);
  display: flex;
  justify-content: center;
`;

const SlidesContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  height: 55vw;
  max-height: 618.75px;
  position: relative;
`

const IntroTextContainer = styled.div`
display: flex;
justify-content: center;
z-index: 5;
width: 100%;
position: absolute;
height: 100%;
align-items: center;
bottom: 0;
color: white;
font-size: 30px;
`

const IntroText = styled.p`
  text-shadow: 0 0 20px black;
  font-weight: 900;
  font-size: 3.5vw;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
`

const TryButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  z-index: 5;
  width: 100%;
  position: absolute;
  bottom: 20px;
`;

const Pic = styled.img`
  width: 100%;
  max-width: 1100px;
`;
