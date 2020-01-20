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
          src="https://docs.google.com/forms/d/e/1FAIpQLSc3pj6Atnic8Xyrn06VKb7LK5xxNJ_YF85ugHTeC2f2UppzHQ/viewform?embedded=true"
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
`;

const Survey = styled.iframe`
  border-width: 0;
`;
