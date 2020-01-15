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
        Have an idea for how the website could be better?  Let us know!
      </Line>
      <Explanation>
        Our development is driven by your feedback;
      </Explanation>
      <Button to="/topic-recommendation">Feedback</Button>
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
