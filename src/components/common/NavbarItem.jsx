// Package dependencies
import React from 'react';
import styled from 'styled-components';
import ReactGA from 'react-ga';
import { Link } from 'react-router-dom';
import { darkBGHover } from 'Styles';

// Component
export default function Navbar({ unit: { title, link, Icon } }) {
  const NewIcon = styled(Icon)`
  @media(max-width: 550px) {
    display: none;
  }
`;

  return (
    <StyledLink
      to={link}
      key={title}
      onClick={() => ReactGA.event({ category: 'Navbar', action: `click ${title}` })}
    >
      <NewIcon alt={title} />
      <ItemText>{title}</ItemText>
    </StyledLink>
  );
}

// Styling
const StyledLink = styled(Link)`
  ${darkBGHover};
  margin: 5px;
  display: flex;
`;

const ItemText = styled.div`
  text-align: center;
`;
