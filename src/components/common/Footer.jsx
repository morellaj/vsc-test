// Package dependencies
import React from 'react';
import styled, { withTheme } from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faPinterest, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
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

  const style = { color: 'white' };

  return (
    <Container>
      <List>
        {items}
      </List>
      <SocialMedia>
        <Icon>
          <a href="learingisthesolution.com" style={style}>
            <FontAwesomeIcon icon={faPinterest} />
          </a>
        </Icon>
        <Icon>
          <a href="learingisthesolution.com" style={style}>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </Icon>
        <Icon>
          <a href="learingisthesolution.com" style={style}>
            <FontAwesomeIcon icon={faFacebookSquare} />
          </a>
        </Icon>
        <Icon>
          <Link to="/update-sign-up" style={style}>
            <FontAwesomeIcon icon={faEnvelope} />
          </Link>
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
  margin-top: 50px;

  @media(max-width: 470px){
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

  @media(max-width: 570px){

  }
`;

const FooterItem = styled.li`
  margin: 7px 15px;

  @media(max-width: 570px){

  }
`;

const StyledLink = styled(Link)`
  padding: 5px;
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
`;

const Icon = styled.div`
  color: white;
  margin: 5px;
  font-size: 25px;
  padding: 5px;
  border-radius: 5px;

  :hover {
    background-color: ${colors.LITS.darkColor};
  };

  @media(max-width: 570px){

  };
`;
