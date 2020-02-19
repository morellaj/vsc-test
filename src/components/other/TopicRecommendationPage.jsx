// Package dependencies
import React, { useEffect } from 'react';
import Head from 'Head';
import styled from 'styled-components';
import PageHeadInfo from 'Data/pageHeadInfo.json';
import Navbar from 'Navbar';
import Footer from 'Footer';
import ReactGA from 'react-ga';
import { baseUrl } from 'Constants';

/** ********************************************* */
// Component for displaying the home page
/** ********************************************* */
export default function FeedbackPage() {
  const { title, description } = PageHeadInfo.TopicRecommendationPage;
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  const url = `${baseUrl}topic-recommendation`;

  const schema = [
    {
      "@type": ["WebPage"],
      "@id": `${url}/#webpage`,
      "url": url,
      "name": title,
      "isPartOf": {
        "@id": `${baseUrl}#website`
      },
      "inLanguage": "en-US",
      "about": {
        "@id": `${baseUrl}#organization`
      },
      "description": description
    }
  ];

  return (
    <>
      <Head
        title={title}
        description={description}
        url={url}
        type="website"
        image={`${baseUrl}assets/logo-large.jpg`}
        height="720"
        width="1280"
        schema={schema}
      />
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
  padding-bottom: 90px;
  display: flex;
  justify-content: center;
  min-height: 900px;
`;

const Survey = styled.iframe`
  border-width: 0;
`;
