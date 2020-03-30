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
  margin-bottom: .8em;
  display: flex;
  align-items: top;
`;

const IconContainer = styled.div`
  font-size: 1.2em;
  color: ${colors.LITS.color};
  position: relative;
  bottom: 5px;
`;

const TextContainer = styled.p`
  margin-left: 10px;
`;
