// Package dependencies
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Component dependencies
import { colors } from '../../colors.json';

/** ********************************************* */
// Component for displaying the home page
/** ********************************************* */
export default function TryButton() {
  return (
    <Container to="book?the-furbots">READ A BOOK</Container>
  );
}

// Constants
const Container = styled(Link)`
  padding: 5px 20px;
  border-radius: 40px;
  background-color: ${colors.LITS.color};
  box-shadow: 0 0 20px 2px #000000;
  font-size: 40px;
  color: white;
  font-weight: 900;
  text-decoration:none;

  :hover{
    background-color: ${colors.LITS.darkColor}
  }
`;
