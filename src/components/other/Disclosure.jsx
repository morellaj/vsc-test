// Package dependencies
import React, { useEffect } from 'react';
import styled from 'styled-components';
import Navbar from 'Navbar';
import Footer from 'Footer';
import ReactGA from 'react-ga';

/** ********************************************* */
// Component for displaying the home page
/** ********************************************* */
export default function FeedbackPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <>
      <Navbar />
      <Container>
        <InnerContainer>
          <Header>Affiliate Products</Header>
          <Body>
          We receive affiliate commission from Amazon for the books sold on Learning is the Solution.  By clicking on a product link, you consent to Amazon&#39;s use of cookies, as outlined in the link below.
          </Body>
          <AmazonPrivacy
            href="https://www.amazon.com/gp/help/customer/display.html/ref=hp_left_v4_sib?ie=UTF8&nodeId=201909010"
            target="_blank"
          >
          Amazon Privacy Notice
          </AmazonPrivacy>
        </InnerContainer>
      </Container>
      <Footer />
    </>
  );
}


// Styling
const Container = styled.main`
  padding-top:20px;
  padding-bottom: 90px;
  display: flex;
  justify-content: center;
`;

const InnerContainer = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Header = styled.h1`

`;

const Body = styled.div`

`;

const AmazonPrivacy = styled.a`

`;
