// Package dependencies
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';

// File dependencies
import IntroPictures from './IntroPictures';
import SitePerks from './SitePerks';
import UnitsDisplay from './UnitsDisplay';
import { Heading, Button, flexCenter } from 'Common/Styles';
import Head from 'Common/Head';
import Picture from 'Common/Picture';
import gaEvent from 'Common/gaEvent';

// Data dependencies
import { homePage } from 'Data/pageHeadInfo.json';
const { title, description } = homePage;
import { baseUrl } from 'Data/constants';

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
        <SitePerks />
        <section>
          <Heading>Current Topics: Ages 4 to 9</Heading>
          <UnitsDisplay />
        </section>
        <SignUpContainer>
          <BannerContainer>
            <Picture
              src="Assets/home-banner"
              alt="cartoon scene from an online book"
              style={{ width: '100%' }}
            />
          </BannerContainer>
          <Button as={Link} to="/update-sign-up" onClick={gaEvent('home', 'clicked low book')}>
            Email Sign-Up
          </Button>
        </SignUpContainer>
      </Container>
    </>
  );
}

// Styling
const Container = styled.main`
  line-height: 1.5;
`;

const SignUpContainer = styled.div`
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

const BannerContainer = styled.picture`
  position: absolute;
  width: 100%;
  min-width: 820px;
  overflow: hidden;
`;
