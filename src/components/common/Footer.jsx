// Package dependencies
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaTwitter, FaPinterest, FaFacebookSquare, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { darkBGHover, themeLITS, flexSpaceBetween } from 'Styles';

// Data dependencies
import { footerList } from 'Constants';

// Component
export default function Footer() {
  const items = footerList.map((unit) => (
    <StyledLink to={unit.link} key={unit.title}>
      {unit.title}
    </StyledLink>
  ));

  return (
    <Container>
      <List>
        {items}
      </List>
      <SocialList>
        <Text>
        Follow Us:
        </Text>
        <Icon as={Link} to="/update-sign-up">
          <FaEnvelope />
        </Icon>
        <Icon href="https://facebook.com/learningisthesolution" target="_blank">
          <FaFacebookSquare />
        </Icon>
        <Icon href="https://www.instagram.com/learning_is_the_solution/" target="_blank">
          <FaInstagram />
        </Icon>
        <Icon href="https://twitter.com/LearnistheSol" target="_blank">
          <FaTwitter />
        </Icon>
        <Icon href="https://www.pinterest.com/learningisthesolution/" target="_blank">
          <FaPinterest />
        </Icon>
      </SocialList>
    </Container>
  );
}


// Styling
const Container = styled.footer`
  ${themeLITS};
  ${flexSpaceBetween};
  float: bottom;
  margin-top: 10px;
  width: 100%;
  font-size: 16px;
  padding: 1em;
  box-sizing: border-box;

  @media(max-width: 850px){
    flex-direction: column;
    height: 110px;
  };

  @media(max-width: 400px) {
    font-size: 14px;
  }
`;

const List = styled.nav`
  ${flexSpaceBetween};
  width: 100%;
  max-width: 350px;
`;

const StyledLink = styled(Link)`
  ${darkBGHover};
  font-weight: 500;
`;

const SocialList = styled.nav`
  ${flexSpaceBetween};
  width: 100%;
  max-width: 350px;
`;

const Icon = styled.a`
  ${darkBGHover};
  font-size: 1.5em;
`;

const Text = styled.div`
  font-weight: 500;
  font-size: 1em;
`;
