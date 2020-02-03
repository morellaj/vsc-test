// Dependencies
import React, { useEffect } from 'react';
import styled from 'styled-components';
import loadable from '@loadable/component';
import { Heading, Button } from 'Styles';
import Navbar from 'Navbar';
import PageHeadInfo from 'Data/pageHeadInfo.json';
import { Link } from 'react-router-dom';
import IntroPictures from './IntroPictures';

const Footer = loadable(() => import('Footer'));
const Head = loadable(() => import('Head'));
const TopicsDisplay = loadable(() => import('./TopicsDisplay'));
const Details = loadable(() => import('./Details'));

/** ********************************************* */
// Component for displaying the home page
/** ********************************************* */
export default function Home() {
  const { title, description } = PageHeadInfo.HomePage;
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Head title={title} description={description} />
      <Navbar />
      <Container>
        <IntroPictures />
        <Details />
        <Heading>Current Topics: Ages 4 to 9</Heading>
        <TopicsDisplay />
        <TryContainer>
          <Link to="book?super-jet-3000" style={{ textDecoration: 'none' }}>
            <Button>Read a book</Button>
          </Link>
        </TryContainer>
      </Container>
      <Footer />
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
