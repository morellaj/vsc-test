// Package dependencies
import React, { useEffect } from 'react';
import styled from 'styled-components';
import PageHeadInfo from 'Data/pageHeadInfo.json';
import Navbar from 'Navbar';
import Footer from 'Footer';
import Head from 'Head';

// Component dependencies
import { teamData, baseUrl } from 'Constants';
import ReactGA from 'react-ga';
import Intro from './Intro';
import TeamMember from './TeamMember';

/** ********************************************* */
// Component for displaying the home page
/** ********************************************* */
export default function AboutPage() {
  const { title, description } = PageHeadInfo.AboutPage;
  const team = teamData.map((item) => (
    <TeamMember
      name={item.name}
      description={item.description}
      responsibilities={item.responsibilities}
      key={item.name}
    />
  ));

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  const url = `${baseUrl}about`;

  const schema = [
    {
      "@type": ["AboutPage"],
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
        <Intro />
        <TeamContainer>
          {team}
        </TeamContainer>
      </Container>
      <Footer />
    </>
  );
}


// Styling
const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 60px;
`;

const TeamContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  padding: 60px 20px;
  max-width: 1200px;
  margin-bottom: 100px;

  @media(max-width: 1000px){
    grid-template-columns: 1fr;
    max-width: 620px;
  }
`;
