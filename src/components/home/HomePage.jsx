// Package dependencies
import React, { useEffect } from 'react';
import styled from 'styled-components';
import loadable from '@loadable/component';


// Component dependencies
import Navbar from 'Common/Navbar';
import IntroPictures from './IntroPictures';
import TryButton from './TryButton';

const TopicsDisplay = loadable(() => import('./TopicsDisplay'));
const Details = loadable(() => import('./Details'));

/** ********************************************* */
// Component for displaying the home page
/** ********************************************* */
export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Navbar />
      <Container>
        <IntroPictures />
        <Details />
        <SectionLabel>CURRENT TOPICS</SectionLabel>
        <TopicsDisplay />
        <TryContainer>
          <TryButton />
        </TryContainer>
      </Container>
    </>
  );
}


// Styling
const Container = styled.div`
  font-size: 16px;
  line-height: 1.5;
`;

const SectionLabel = styled.h1`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 0;
  font-size: 2vw;
  font-weight: 700;
  color: dimgray;
  text-decoration: underline;

  @media(max-width: 1000px){
    font-size: 20px;
  }
`;

const TryContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  padding-bottom: 100px;
`;
