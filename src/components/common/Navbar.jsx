// Package dependencies
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaBookReader, FaInfoCircle, FaSignInAlt } from 'react-icons/fa';
import { darkBGHover, themeLITS, flexSpaceBetween } from 'Styles';

// Component dependencies
import NavbarItem from './NavbarItem';

// Data dependencies
const navbarList = [
  {
    title: 'Online Books',
    Icon: FaBookReader,
    link: '/units',
  },
  {
    title: 'About',
    Icon: FaInfoCircle,
    link: '/about',
  },
  {
    title: 'Sign-Up',
    Icon: FaSignInAlt,
    link: '/update-sign-up',
  },
];
const items = navbarList.map((unit) => <NavbarItem unit={unit} key={unit.title} />);

// Component
export default function Navbar() {
  return (
    <Container>
      <LogoContainer to="/">
        <picture>
          <source
            srcSet="https://learningisthesolution.com/assets/logo-white-small.webp"
            type="image/webp"
          />
          <source
            srcSet="https://learningisthesolution.com/assets/logo-white-small.png"
            type="image/png"
          />
          <Logo
            src="https://learningisthesolution.com/assets/logo-white-small.png"
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
  ${themeLITS};
  ${flexSpaceBetween};
  width: 100%;
  box-sizing: border-box;
  font-size: 20px;
  padding: .15em 2em;

  @media(max-width: 700px){
    font-size: 16px;
    padding: .15em 1em;
  }

  @media(max-width: 450px){
    font-size: 12px;
  }

  @media(max-width: 350px){
    font-size: 10px;
  }
`;

const LogoContainer = styled(Link)`
  ${darkBGHover};
  padding: .1em .15em;
`;

const Logo = styled.img`
  height: 2.5em;
`;

const List = styled.nav`
  ${flexSpaceBetween};
  max-width: 375px;
  display: flex;
  font-size: 16px;
  font-weight: 500;

  @media(max-width: 450px){
    font-size: 12px;
  }
`;
