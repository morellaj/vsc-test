// Package dependencies
import React from 'react';
import styled from 'styled-components';

// Component dependencies
import { introSlideProperties } from 'Constants';
import Slides from './Slides';
import NewSlides from './NewSlides';
import Home8 from '../../../assets/Home8.webp';
import Home34 from '../../../assets/Home34.webp';
import Home5 from '../../../assets/Home5.webp';
import Home12 from '../../../assets/Home12.webp';
import Home10 from '../../../assets/Home10.webp';
import TryButton from './TryButton';

// Constants
const pictureList = [
  {
    id: 1,
    src: Home8,
    iLeft: 0,
    fLeft: 0,
    iBottom: 0,
    fBottom: 0,
    iWidth: '100%',
    fWidth: '110%',
  },
  {
    id: 2,
    src: Home34,
    iLeft: 0,
    fLeft: 0,
    iBottom: 0,
    fBottom: 0,
    iWidth: '110%',
    fWidth: '100%',
  },
  {
    id: 3,
    src: Home5,
    iLeft: 0,
    fLeft: 0,
    iBottom: 0,
    fBottom: 0,
    iWidth: '100%',
    fWidth: '110%',
  },
  {
    id: 4,
    src: Home12,
    iLeft: 0,
    fLeft: 0,
    iBottom: 0,
    fBottom: 0,
    iWidth: '110%',
    fWidth: '100%',
  },
  {
    id: 5,
    src: Home10,
    iLeft: 0,
    fLeft: 0,
    iBottom: 0,
    fBottom: 0,
    iWidth: '100%',
    fWidth: '110%',
  },
];

/** ********************************************* */
// Component for displaying the home page
/** ********************************************* */
export default function IntroParagraph() {
  return (
    <Container>
      <SlidesContainer>
        <NewSlides pictureList={pictureList} type="Home" fadeProperties={introSlideProperties} />
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

  @media(max-width:1115px){
    height: 55vw;
  }
`;

const SlidesContainer = styled.div`
  width: 100%;
  /*
  max-width: 1100px;
  height: 55vw;
  */
  max-height: 618.75px;
  position: relative;
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
