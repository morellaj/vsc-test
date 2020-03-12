// Package dependencies
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaBookReader, FaInfoCircle, FaSignInAlt } from 'react-icons/fa';

// Component dependencies
import NavbarItem from './NavbarItem';

// Data dependencies
import colors from 'Colors';
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

// Component
export default function Navbar() {
  const items = navbarList.map((unit) => <NavbarItem unit={unit} />);

  return (
    <Container>
      <LogoContainer to="/">
        <picture>
          <source srcSet="https://learningisthesolution.com/assets/logo-white-small.webp" type="image/webp" />
          <source srcSet="https://learningisthesolution.com/assets/logo-white-small.png" type="image/png" />
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
const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: ${colors.LITS.color};
  width: 100%;
`;

const LogoContainer = styled(Link)`
  padding: 5px 20px;
  border-radius: 5px;
  margin: 0 20px;
  display: flex;
  align-items: center;

  :hover{
    background-color: ${colors.LITS.darkColor};
  }

  @media(max-width: 700px){
    margin: 0 5px;
  }

  @media(max-width: 340px){
    padding: 5px;
  }
`;

const Logo = styled.img`
  height: 50px;

  @media(max-width: 700px) {
    height: 30px;
  }

  @media(max-width: 500px) {
    height: 25px;
  }

  @media(max-height: 500px) {
    height: 25px;
  }

`;

const List = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items:center;
  margin: 0 20px 0 0;
  padding: 0;
  font-size: 16px;
  font-weight: 500;
  color: white;
  list-style-type: none;

  @media(max-width: 700px){
    font-size: 12px;
    margin: 0;
  }

  @media(max-height: 500px){
    font-size: 12px;
    margin: 0;
  }
`;
