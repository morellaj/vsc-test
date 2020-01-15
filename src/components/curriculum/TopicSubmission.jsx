// Package dependencies
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Component dependencies
import colors from 'Colors';


/** ********************************************* */
// Component for displaying the home page
/** ********************************************* */
export default function TopicSubmission() {
  return (
    <Container>
      <Line>
        Interested in topics that aren&apos;t available yet or aren&apos;t listed?
        Let us know below!
      </Line>
      <Explanation>
        Your input helps decide which topics are prioritized next.
      </Explanation>
      <Button to="/topic-recommendation">Recommend New Topics</Button>
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
`;

const Line = styled.div`
  font-weight: 700;
  font-size: 30px;
`;

const Explanation = styled.div`
  margin-bottom: 10px;
  font-size: 20px;
`;

const Button = styled(Link)`
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
