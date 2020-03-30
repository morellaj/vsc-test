// Package dependencies
import React, { lazy, Suspense } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';

// Component dependencies
import { Button, flexCenter } from 'Styles';
const IntroSlides = lazy(() => import('./IntroSlides'));

// Component
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
const Container = styled.article`
  ${flexCenter};
  align-items: stretch;
  background-color: rgba(0, 0, 0, .2);
  overflow: hidden;
  height: 619px;

  @media(max-width: 1280px){
    height: 47vw;
  }
`;


const SlidesContainer = styled.div`
  ${flexCenter};
  width: 100%;
  max-height: 619px;
  position: relative;
  display: flex;
  justify-content:center;
  font-size: 24px;

  @media(max-width: 1000px){
    font-size: 1.8vw;
  }

  @media(max-width: 650px){
    font-size: 12px;
  }
`;

const IntroTextContainer = styled.div`
${flexCenter};
z-index: 5;
width: 100%;
position: absolute;
height: 100%;
bottom: 0;
color: white;
`;

const IntroText = styled.h1`
  text-shadow: 0 1px 1px black, 0 2px 5px rgba(0,0,0,0.6), 0 4px 10px rgba(0,0,0,0.2);
  font-weight: 900;
  font-size: 2.3em;
  text-align: center;

  @media(max-width: 650px){
    font-size: 4.5vw;
  }

`;

const TryButtonContainer = styled.div`
  ${flexCenter};
  z-index: 6;
  width: 100%;
  position: absolute;
  bottom: .5em;
`;
