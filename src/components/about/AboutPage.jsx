// Package dependencies
import React from 'react';
import styled from 'styled-components';
import Navbar from 'Common/Navbar';

// Component dependencies
import Intro from './Intro';


/** ********************************************* */
// Component for displaying the home page
/** ********************************************* */
export default function AboutPage() {
  return (
    <>
      <Navbar />
      <Container>
        <Intro />
        <TeamContainer />
      </Container>
    </>
  );
}


// Styling
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TeamContainer = styled.div`
  
`;
