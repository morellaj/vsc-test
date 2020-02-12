// Dependencies
import React, { useEffect, lazy, Suspense } from 'react';
import styled from 'styled-components';
import { Heading, Button } from 'Styles';
import Navbar from 'Navbar';
import PageHeadInfo from 'Data/pageHeadInfo.json';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';
import IntroPictures from './IntroPictures';

const Head = lazy(() => import('Head'));
const Details = lazy(() => import('./Details'));
const Footer = lazy(() => import('Footer'));
const TopicsDisplay = lazy(() => import('./TopicsDisplay'));


/** ********************************************* */
// Component for displaying the home page
/** ********************************************* */
export default function Home() {
  const { title, description } = PageHeadInfo.HomePage;
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      <Suspense fallback={<div />}>
        <Head
          title={title}
          description={description}
          type="website"
          image="https://learningisthesolution.com/assets/$Home1.jpg"
          height="1519px"
          width="619px"

        />
      </Suspense>
      <Navbar />
      <Container>
        <IntroPictures />
        <Suspense fallback={<div />}>
          <Details />
        </Suspense>
        <Heading>Current Topics: Ages 4 to 9</Heading>
        <Suspense fallback={<div />}>
          <TopicsDisplay />
        </Suspense>
        <TryContainer>
          <BannerContainer>
            <source srcSet="Assets/home-banner.webp" type="image/webp" />
            <source srcSet="Assets/home-banner.jpg" type="image/jpeg" />
            <img
              alt="cartoon scene of Joey, Mia, and Tom"
              src="Assets/home-banner.jpg"
              type="image/jpeg"
              style={{ width: '100%' }}
            />
          </BannerContainer>
          <Link
            to="/update-sign-up"
            style={{ textDecoration: 'none', zIndex: '100' }}
            onClick={() => ReactGA.event({ category: 'home', action: 'clicked lower read a book' })}
          >
            <Button>Email Sign-Up</Button>
          </Link>
        </TryContainer>
      </Container>
      <Suspense fallback={<div />}>
        <Footer />
      </Suspense>
    </>
  );
}


// Styling
const Container = styled.main`
  line-height: 1.5;
  padding-bottom: 90px;
`;

const TryContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  height: 232px;
  overflow: hidden;
`;

const BannerContainer = styled.picture`
  position: absolute;
  width: 100%;
  min-width: 820px;
  overflow: hidden;
`;
