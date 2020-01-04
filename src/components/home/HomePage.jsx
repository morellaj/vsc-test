// Package dependencies
import React from 'react';
import styled from 'styled-components';


// Component dependencies
import Navbar from '../common/Navbar';
import IntroPictures from './IntroPictures';
import TopicsDisplay from './TopicsDisplay';
import Details from './Details';
import TryButton from './TryButton';
import Footer from '../common/Footer';

/** ********************************************* */
// Component for displaying the home page
/** ********************************************* */
export default function Home() {
  return (
    <>
      <Navbar />
      <IntroPictures />
      <SectionLabel>CURRENT TOPICS</SectionLabel>
      <TopicsDisplay />
      <Details />
      <TryContainer>
        <TryButton />
      </TryContainer>
      <Footer />
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
`;
