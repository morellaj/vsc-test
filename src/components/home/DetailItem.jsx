// Package dependencies
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Data dependencies
import colors from 'Colors';

// Component
export default function DetailItem(props) {
  const { item: { icon, label, text } } = props;
  return (
    <Container>
      <IconContainer>
        <FontAwesomeIcon icon={icon} />
      </IconContainer>
      <TextContainer>
        <Label>{label}</Label>
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

const TextContainer = styled.div`
  margin-left: 10px;
`;

const Label = styled.span`
  font-weight: 700;
`;
