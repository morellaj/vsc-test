// Package dependencies
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Component dependencies
import { footerList } from 'Constants';


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
    <List>
      {items}
    </List>
  );
}


// Styling
const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 30px;
  padding: 0;
  font-size: 16px;
  list-style-type: none;
  position:absolute;
  bottom: 0px;
  width: 100%;

  @media(max-width: 750px){
    font-size: 14px;
  }
`;

const FooterItem = styled.li`
  margin: 7px 15px;
`;

const StyledLink = styled(Link)`
  padding: 5px;
  border-radius: 5px;
  color: darkgray;
  text-decoration: none;

  :hover {
    background-color: gray;
    color: white;
  }
`;
