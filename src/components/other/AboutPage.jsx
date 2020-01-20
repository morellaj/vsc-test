// Package dependencies
import React from 'react';
import styled from 'styled-components';
import Navbar from 'Common/Navbar';


/** ********************************************* */
// Component for displaying the home page
/** ********************************************* */
export default function AboutPage() {
  return (
    <>
      <Navbar />
      <Container>
        <Title>About</Title>
        <Heading>Why Learning is the Solution?</Heading>
        <Text>
          To Be Completed
        </Text>
      </Container>
    </>
  );
}


// Styling
const Container = styled.div`
 
`;

const Title = styled.div`

`;

const Heading = styled.div`

`;

const Text = styled.div`

`;
