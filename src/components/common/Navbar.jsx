// Package dependencies
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookReader,
  faInfoCircle,
  faCommentDots,
} from '@fortawesome/free-solid-svg-icons';

// Component dependencies and data files
import colors from 'Colors';

const navbarList = [
  {
    title: 'Online Books',
    icon: faBookReader,
    link: '/units',
  },
  {
    title: 'About',
    icon: faInfoCircle,
    link: '/about',
  },
  {
    title: 'Give Feedback',
    icon: faCommentDots,
    link: '/feedback',
  },
];

// Component for displaying the navbar on pages
export default function Navbar() {
  const items = navbarList.map((unit) => (
    <Item key={unit.title}>
      <StyledLink to={unit.link}>
        <Icon icon={unit.icon} />
        <ItemText>{unit.title}</ItemText>
      </StyledLink>
    </Item>
  ));

  return (
    <Container>
      <LogoContainer to="/">
        <picture>
          <source srcSet="Assets/logo-white-small.webp" type="image/webp" />
          <source srcSet="Assets/logo-white-small.png" type="image/png" />
          <Logo
            src="Assets/logo-white-small.png"
            alt="Learning is the Solution logo"
            type="image/png"
          />
        </picture>
      </LogoContainer>
      <List>
        {items}
      </List>
    </Container>
  );
}

// Styling
const Container = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: ${colors.LITS.color};
`;

const LogoContainer = styled(Link)`
  padding: 5px;
  border-radius: 5px;
  margin: 5px 20px;

  :hover{
    background-color: ${colors.LITS.darkColor};
  }

  @media(max-width: 500px){
    margin: 5px;
  }
`;

const Logo = styled.img`
  height: 50px;

  @media(max-width: 500px) {
    height: 40px;
  }
`;

const List = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items:center;
  margin: 0 20px 0 0;
  font-size: 16px;
  font-weight: 500;
  color: white;
  list-style-type: none;

  @media(max-width: 500px){
    padding: 0;
  }
`;

const Item = styled.li`
  border-radius: 5px;
  margin: 10px;

  :hover{
    background-color: ${colors.LITS.darkColor};
  }

  @media(max-width: 500px) {
    margin: 5px;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  margin: 0 5px;
`;

const StyledLink = styled(Link)`
  display: flex;
  color: inherit;
  text-decoration: none;
  padding: 7px;

  @media(max-width: 500px) {
    padding: 5px;
  }
`;

const ItemText = styled.div`
 @media(max-width: 783px) {
   display: none;
 }
`;
