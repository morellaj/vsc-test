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
        <span>Your input is priceless!  </span>
        <StyledLink to="/feedback">Give Us Feedback</StyledLink>
        <span>{' or '}</span>
        <StyledLink to="/topic-recommendation">Recommend Our Next Topics</StyledLink>
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
  font-size: 30px;
  margin-bottom: 20px;
`;

const StyledLink = styled(Link)`
    color: ${colors.LITS.color};
    text-decoration: none;
    font-weight: 900;

    :hover {
        color: ${colors.LITS.darkColor};
    }
`;
