// Package dependencies
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


// Component dependencies and data files
import colors from 'Colors';
import { navbarList } from 'Constants';
import Icon from 'Icon';
import LogoPicture from '../../../assets/logo-white-small.webp';


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
        <Logo src={LogoPicture} alt="Learning is the Solution logo" />
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
`;

const Logo = styled.img`
  height: 50px;
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
`;

const Item = styled.li`
  padding: 10px;
  border-radius: 15px;
  margin: 10px;

  :hover{
    background-color: ${colors.LITS.darkColor};
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  color: inherit;
  text-decoration: none;
`;

const ItemText = styled.div`
 @media(max-width: 783px) {
   display: none;
 }
`;
