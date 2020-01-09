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
      <Text>
        Complete an activity you loved?  Or more importantly, one you hated?
        Wish aspects of the website were differently? Let us know!
      </Text>
      <FeedbackButton to="/feedback">Give Feedback</FeedbackButton>
      <Text>Our development is driven by your input and feedback.</Text>
    </Container>
  );
}


// Styling
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 200px;
  padding-bottom: 100px;
`;

const Text = styled.div`
  margin: 10px;
  font-size: 20px;
`;

const FeedbackButton = styled(Link)`
  padding: 14px 20px;
  border: none;
  border-radius: 10px;  
  background-color: ${colors.LITS.color};
  color: white;
  cursor: pointer;
  font-size: 20px;
  text-decoration:none;

  :hover{
    background-color: ${colors.LITS.darkColor}
  }
`;
