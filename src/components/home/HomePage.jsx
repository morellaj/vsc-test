// Package dependencies
import React, { useEffect } from 'react';
import styled from 'styled-components';
import loadable from '@loadable/component';


// Component dependencies
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
      <IntroPictures />
      <SectionLabel>CURRENT TOPICS</SectionLabel>
      <TopicsDisplay />
      <Details />
      <TryContainer>
        <TryButton />
      </TryContainer>
    </>
  );
}


// Styling
const SectionLabel = styled.h1`
  display: flex;
  justify-content: center;
  margin: 70px 0 40px 0;
  font-size: 30px;
  font-weight: 700;
  color: dimgray;
  text-decoration: underline;
`;

const TryContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  padding-bottom: 100px;
`;
