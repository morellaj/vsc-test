// Package dependencies
import React from 'react';
import styled from 'styled-components';
import ReactGA from 'react-ga';
import { Link } from 'react-router-dom';

// Data dependencies
import colors from 'Colors';

// Component
export default function Navbar({ unit: { title, link, Icon } }) {
  const NewIcon = styled(Icon)`
  margin: 0 5px;

  @media(max-width: 450px) {
    display: none;
  }
`;

  return (
    <Item
      key={title}
      onClick={() => ReactGA.event({ category: 'Navbar', action: `click ${title}` })}
    >
      <StyledLink to={link}>
        <NewIcon alt={title} />
        <ItemText>{title}</ItemText>
      </StyledLink>
    </Item>
  );
}

// Styling
const Item = styled.li`
  border-radius: 5px;
  margin: 10px;

  :hover{
    background-color: ${colors.LITS.darkColor};
  }

  @media(max-width: 600px) {
    margin: 5px;
  }

  @media(max-height: 500px) {
    margin: 5px;
  }

  @media(max-width: 340px) {
    margin: 3px;
  }
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
  text-align: center;
`;
