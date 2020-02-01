// Package dependencies
import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import PageHeadInfo from 'Data/pageHeadInfo.json';
import Navbar from 'Navbar';
import Footer from 'Footer';

// Component dependencies
import { teamData } from 'Constants';
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
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta charset="utf-8" />
      </Helmet>
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
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
