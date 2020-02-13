// Package dependencies
import React, { useEffect } from 'react';
import Head from 'Head';
import styled from 'styled-components';
import PageHeadInfo from 'Data/pageHeadInfo.json';
import Navbar from 'Navbar';
import Footer from 'Footer';
import ReactGA from 'react-ga';

/** ********************************************* */
// Component for displaying the home page
/** ********************************************* */
export default function FeedbackPage() {
  const { title, description } = PageHeadInfo.FeedbackPage;
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <>
      <Head
        title={title}
        description={description}
        url="https://learningisthesolution.com/contact"
        type="website"
        image="https://learningisthesolution.com/assets/logo-large.jpg"
        height="720px"
        width="1280px"
      />
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
      <Footer />
    </>
  );
}


// Styling
const Container = styled.main`
  justify-content: center;
  padding-top:20px;
  padding-bottom: 90px;
  display: flex;
  justify-content: center;
`;

const Survey = styled.iframe`
  border-width: 0;
`;
