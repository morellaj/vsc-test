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
  const { title, description } = PageHeadInfo.ContactPage;
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
