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
        <Head title={title} description={description} />
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
          <Link
            to="book?super-jet-3000"
            style={{ textDecoration: 'none' }}
            onClick={() => ReactGA.event({ category: 'home', action: 'clicked lower read a book' })}
          >
            <Button>Read a book</Button>
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
`;

const TryContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  padding-bottom: 100px;
`;
