// Package dependencies
import React from 'react';
import styled from 'styled-components';

// Component dependencies
import { introSlideProperties } from 'Constants';
import IntroSlides from './IntroSlides';
import Home1 from '../../../assets/Home1.webp';
import Home2 from '../../../assets/Home2.webp';
import Home3 from '../../../assets/Home3.webp';
import Home4 from '../../../assets/Home4.webp';
import Home5 from '../../../assets/Home5.webp';
import TryButton from './TryButton';

// Constants
const pictureList = [
  {
    id: 1,
    src: Home1,
    iLeft: 0,
    fLeft: 0,
    iBottom: 0,
    fBottom: 0,
    iWidth: '100%',
    fWidth: '110%',
    iFactor: '1',
    fFactor: '1.1',
  },
  {
    id: 2,
    src: Home2,
    iLeft: 0,
    fLeft: 0,
    iBottom: 0,
    fBottom: 0,
    iWidth: '110%',
    fWidth: '100%',
    iFactor: '1.1',
    fFactor: '1',
  },
  {
    id: 3,
    src: Home3,
    iLeft: 0,
    fLeft: 0,
    iBottom: 0,
    fBottom: 0,
    iWidth: '100%',
    fWidth: '110%',
    iFactor: '1',
    fFactor: '1.1',
  },
  {
    id: 4,
    src: Home4,
    iLeft: 0,
    fLeft: 0,
    iBottom: 0,
    fBottom: 0,
    iWidth: '110%',
    fWidth: '100%',
    iFactor: '1.1',
    fFactor: '1',
  },
  {
    id: 5,
    src: Home5,
    iLeft: 0,
    fLeft: 0,
    iBottom: 0,
    fBottom: 0,
    iWidth: '100%',
    fWidth: '110%',
    iFactor: '1',
    fFactor: '1.1',
  },
];

/** ********************************************* */
// Component for displaying the home page
/** ********************************************* */
export default function IntroParagraph() {
  return (
    <Container>
      <SlidesContainer>
        <IntroSlides pictureList={pictureList} type="Home" fadeProperties={introSlideProperties} />
        <TryButtonContainer>
          <TryButton />
        </TryButtonContainer>
        <IntroTextContainer>
          <IntroText>
            Online books that inspire
            {' '}
            <br />
            {' '}
            kids to make good choices!
          </IntroText>
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
  overflow: hidden;
  height: 619px;

  @media(max-width: 1280px){
    height: 47vw;
  }
`;

const SlidesContainer = styled.div`
  width: 100%;
  max-height: 618.75px;
  position: relative;
  display: flex;
  justify-content:center;
`;

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
`;

const IntroText = styled.p`
  text-shadow: 0 1px 1px black, 0 2px 5px rgba(0,0,0,0.6), 0 4px 10px rgba(0,0,0,0.2);
  font-weight: 900;
  font-size: 4.5vw;
  text-align: center;
`;

const TryButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  z-index: 6;
  width: 100%;
  position: absolute;
  bottom: 5px;
`;
