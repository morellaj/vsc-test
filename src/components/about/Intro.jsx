// Package dependencies
import React from 'react';
import styled from 'styled-components';


/** ********************************************* */
// Component for displaying the home page
/** ********************************************* */
export default function Intro() {
  return (
    <Container>
      <Heading>
        We provide the tools parents need to raise happy kids who make effective decisions.
      </Heading>
      <Paragraph>
        We believe that
        {' '}
        <Emphasis>every child</Emphasis>
        {' '}
        has the potential for a fulfilling life packed with achievement and contribution.  But this potential is only realized if kids get the the learning experiences they need.  We are making it easy for parents to provide these experiences through engaging, interactive resources that are openly accessible online.
      </Paragraph>
    </Container>
  );
}


// Styling
const Container = styled.div`
  width: 700px;
  margin-top: 100px;
`;

const Heading = styled.div`
  font-weight: 900;
  font-size: 65px;
  line-height: 1;
`;

const Paragraph = styled.div`
  font-size: 14px;
  padding: 50px 100px 0 0;
  line-height: 1.5;
`;

const Emphasis = styled.span`
  text-decoration: underline;
  font-weight: 500;
  font-style: italic;
`;
