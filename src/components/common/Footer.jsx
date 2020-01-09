// Package dependencies
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Component dependencies
import { navbarList } from 'Constants';


// Component for displaying the navbar on pages
export default function Footer() {
  const items = navbarList.map((unit) => (
    <FooterItem key={unit.title}>
      <Link to={unit.link} style={{ color: 'inherit', textDecoration: 'none' }}>
        <div>{unit.title}</div>
      </Link>
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
  justify-content: center;
  margin: 50px 0 30px 0;
  padding: 0;
  font-size: 18px;
  color: darkgray;
  list-style-type: none;
  position:absolute;
  bottom: 0px;
  width: 100%;
`;

const FooterItem = styled.li`
  margin: 0 15px;
`;
