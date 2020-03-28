// Package dependencies
import React from 'react';
import styled from 'styled-components';

// Data dependencies
import colors from 'Colors';

// Component
export default function DetailItem({ item: { Icon, label, text } }) {
  return (
    <Container>
      <IconContainer>
        <Icon />
      </IconContainer>
      <TextContainer>
        <strong>{label}</strong>
        {' '}
&mdash;
        {text}
      </TextContainer>
    </Container>
  );
}


// Styling
const Container = styled.li`
  margin-bottom: 15px;
  display: flex;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 31.25px;
  color: ${colors.LITS.color};
  padding-top: 3px;
`;

const TextContainer = styled.p`
  margin-left: 10px;
`;
