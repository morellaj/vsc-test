// Package dependencies
import React, { useEffect } from 'react';
import styled from 'styled-components';
import Navbar from 'Navbar';
import Footer from 'Footer';

/** ********************************************* */
// Component for displaying the home page
/** ********************************************* */
export default function FeedbackPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Navbar />
      <Container>
        <Survey
          id="survey"
          src="https://docs.google.com/forms/d/e/1FAIpQLSfRH6d6CzQ5SWMGm6FCYvDiNIbpcteNTV26-SfRbRSs2SrWsw/viewform?embedded=true"
          scrolling="no"
          height="700px"
          width="640px"
        />
      </Container>
      <Footer />
    </>
  );
}


// Styling
const Container = styled.div`
  justify-content: center;
  padding-top:20px;
  display: flex;
  justify-content: center;
`;

const Survey = styled.iframe`
  border-width: 0;
`;
