// Package dependencies
import React, { useEffect } from 'react';
import styled from 'styled-components';
import Navbar from 'Common/Navbar';

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
          src="https://docs.google.com/forms/d/e/1FAIpQLSdG54U2Qf6IV8b_U7Orf35XGc8opVX9_H8xV6XQhrWbtd1eJw/viewform?embedded=true"
          scrolling="no"
          height="700px"
          width="640px"
        />

      </Container>
    </>
  );
}


// Styling
const Container = styled.div`
  justify-content: center;
  padding-top:20px;
  display: flex;
  justify-content: center;
  min-height: 900px;
`;

const Survey = styled.iframe`
  border-width: 0;
`;
