// Package dependencies
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Component dependencies
import colors from 'Colors';


/** ********************************************* */
// Component for displaying the home page
/** ********************************************* */
export default function Feedback() {
  return (
    <Container>
      <Line>
        <StyledLink to="/feedback">Give Us Feedback</StyledLink>
        <span>{' or '}</span>
        <StyledLink to="/update-sign-up">Sign Up for Updates</StyledLink>
         !
      </Line>
    </Container>
  );
}


// Styling
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  padding-bottom: 100px;
`;

const Line = styled.div`
  font-size: 2vw;
  margin: 0 10px 20px 10px;
  text-align: center;
  margin-top: 30px;

  @media(max-width: 800px) {
    font-size: 16px;
    margin-top: 20px;
  }
`;

const StyledLink = styled(Link)`
    color: ${colors.LITS.darkColor};
    text-decoration: none;
    font-weight: 900;

    :hover {
        text-decoration: underline;
    }
`;
