// Package dependencies
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Component dependencies
import colors from 'Colors';

/** ********************************************* */
// Component for displaying the home page
/** ********************************************* */
export default function TryButton() {
  return (
    <Container to="book?super-jet-3000">Read a book</Container>
  );
}

// Constants
const Container = styled(Link)`
  padding: 1vw 1.4vw;
  border-radius: 5px;
  background-color: ${colors.LITS.color};
  font-size: 1.5vw;
  color: white;
  font-weight: 700;
  text-decoration:none;
  border: 1px solid black;
  box-shadow: 0 1px 1px black, 0 2px 5px rgba(0,0,0,0.6), 0 4px 10px rgba(0,0,0,0.2);
  border-color: rgba(0,0,0,0.2) rgba(0,0,0,0.35) rgba(0,0,0,0.55);
  border-bottom-width: 2px;

  @media(max-width: 1000px) {
    font-size: 14px;
    padding: 10px 15px;
  }

  @media(max-width: 500px) {
    font-size: 3.5vw;
    padding: 2vw 3vw;
  }

  :hover{
    background-color: ${colors.LITS.darkColor}
  }
`;
