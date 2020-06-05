// Package dependencies
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';

// File dependencies
import IntroPictures from './IntroPictures';
import Details from './Details';
import TopicsDisplay from './TopicsDisplay';
import { Heading, Button, flexCenter } from 'Common/Styles';
import Head from 'Common/Head';
import Picture from 'Common/Picture';

// Data dependencies
import { homePage } from 'Data/pageHeadInfo.json';
const { title, description } = homePage;
import { baseUrl } from 'Constants';

const handleClick = () => ReactGA.event({ category: 'home', action: 'clicked lower read a book' });

// Component
export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      <Head
        title={title}
        description={description}
        type="website"
        image={`${baseUrl}assets/Home1.jpg`}
        height="1519"
        width="619"
        url={baseUrl}
      />
      <Container>
        <IntroPictures />
        <Details />
        <section>
          <Heading>Current Topics: Ages 4 to 9</Heading>
          <TopicsDisplay />
        </section>
        <TryContainer>
          <Picture
            src="Assets/home-banner"
            alt="cartoon scene from an online book"
            containerStyle={bannerContainerStyle}
            imgStyle={bannerImgStyle}
          />
          <Button as={Link} to="/update-sign-up" onClick={handleClick}>
            Email Sign-Up
          </Button>
        </TryContainer>
      </Container>
    </>
  );
}

// Styling
const Container = styled.main`
  line-height: 1.5;
`;

const TryContainer = styled.div`
  ${flexCenter};
  position: relative;
  margin-top: 50px;
  height: 232px;
  overflow: hidden;
  font-size: 20px;

  @media(max-width: 1000px){
    font-size: 14px;
  }
`;

const bannerContainerStyle = {
  position: 'absolute',
  width: '100%',
  minWidth: '820px',
  overflow: 'hidden'
};

const bannerImgStyle = {
  width: '100%'
};
