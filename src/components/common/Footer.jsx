// Package dependencies
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter, faPinterest, faFacebookSquare, faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

// Component dependencies
import { footerList } from 'Constants';
import colors from 'Colors';


// Component for displaying the navbar on pages
export default function Footer() {
  const items = footerList.map((unit) => (
    <FooterItem key={unit.title}>
      <StyledLink to={unit.link}>
        {unit.title}
      </StyledLink>
    </FooterItem>
  ));

  return (
    <Container>
      <List>
        {items}
      </List>
      <SocialMedia>
        <Text>
        Follow Us:
        </Text>
        <IconLink to="/update-sign-up">
          <FontAwesomeIcon icon={faEnvelope} />
        </IconLink>
        <Icon href="https://facebook.com/learningisthesolution" target="_blank">
          <FontAwesomeIcon icon={faFacebookSquare} />
        </Icon>
        <Icon href="https://www.instagram.com/learning_is_the_solution/" target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
        </Icon>
        <Icon href="https://twitter.com/LearnistheSol" target="_blank">
          <FontAwesomeIcon icon={faTwitter} />
        </Icon>
        <Icon href="https://www.pinterest.com/learningisthesolution/" target="_blank">
          <FontAwesomeIcon icon={faPinterest} />
        </Icon>
      </SocialMedia>
    </Container>
  );
}


// Styling
const Container = styled.div`
  background-color: ${colors.LITS.color};
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  position: absolute;
  bottom: 0;
  width: 100%;


  @media(max-width: 600px){
    flex-direction: column;
    height: auto;
    padding-top: 5px;
  };
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 16px;
  list-style-type: none;
  margin: 0;
  padding: 0;

  @media(max-width: 750px){
    font-size: 14px;
  }
`;

const FooterItem = styled.li`
  margin: 7px 15px;
`;

const StyledLink = styled(Link)`
  padding: 10px;
  border-radius: 5px;
  color: white;
  font-weight: 500;
  text-decoration: none;

  :hover {
    background-color: ${colors.LITS.darkColor};
  }
`;

const SocialMedia = styled.div`
  display: flex;
  margin-right: 15px;
  align-items: center;
`;

const Icon = styled.a`
  color: white;
  font-size: 25px;
  border-radius: 5px;
  padding: 10px;

  :hover {
    background-color: ${colors.LITS.darkColor};
  };
`;

const IconLink = styled(Link)`
  color: white;
  font-size: 25px;
  border-radius: 5px;
  padding: 10px;

  :hover {
    background-color: ${colors.LITS.darkColor};
  };
`;

const Text = styled.div`
  font-weight: 500;
  font-size: 16px;


@media(max-width: 750px){
    font-size: 14px;
  }
`;
