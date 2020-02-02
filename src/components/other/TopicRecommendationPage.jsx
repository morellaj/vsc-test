// Package dependencies
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import PageHeadInfo from 'Data/pageHeadInfo.json';
import Navbar from 'Navbar';
import Footer from 'Footer';

/** ********************************************* */
// Component for displaying the home page
/** ********************************************* */
export default function FeedbackPage() {
  const { title, description } = PageHeadInfo.TopicRecommendationPage;
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta charset="utf-8" />
      </Helmet>
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
      <Footer />
    </>
  );
}


// Styling
const Container = styled.main`
  justify-content: center;
  padding-top:20px;
  display: flex;
  justify-content: center;
  min-height: 900px;
`;

const Survey = styled.iframe`
  border-width: 0;
`;
