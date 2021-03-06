// Package dependencies
import React, { lazy, Suspense } from 'react';
import styled from 'styled-components';
import { Button } from 'Styles';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';

// Component dependencies
const IntroSlides = lazy(() => import('./IntroSlides'));

/** ********************************************* */
// Component for displaying the home page
/** ********************************************* */
export default function IntroPictures() {
  return (
    <Container>
      <SlidesContainer>
        <Suspense fallback={<div />}>
          <IntroSlides />
        </Suspense>
        <TryButtonContainer>
          <Link
            to="book?super-jet-3000"
            style={{ textDecoration: 'none' }}
            onClick={() => ReactGA.event({ category: 'home', action: 'clicked upper read a book' })}
          >
            <Button>Read a Book</Button>
          </Link>
        </TryButtonContainer>
        <IntroTextContainer>
          <IntroText>
            Online books that empower
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

const IntroText = styled.h1`
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
  bottom: 20px;

  @media(max-width: 500px) {
    bottom: 4vw;
  }
`;
