// Package dependencies
import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

// Data dependencies
import character from 'Data/character.json';

// Component
export default function LearningGoals() {
  const { unitSelected } = useSelector((state) => state.unitReducer);
  const { learningGoals, importantInformation } = character[unitSelected];

  let i = 0;
  const learningGoalsDisplay = learningGoals.map((goal) => {
    i += 1;
    return <Text key={i}>{goal}</Text>;
  });

  let j = 0;
  const importantInformationDisplay = importantInformation.map((info) => {
    j += 1;
    return <Text key={j}>{info}</Text>;
  });

  return (
    <>
      <Title>Learning Goals</Title>
      <Section>
        <Label>Learning Goals for Kids</Label>
        <TextContainer>
          {learningGoalsDisplay}
        </TextContainer>
      </Section>
      <Section>
        <Label>Important Information for Parents</Label>
        <TextContainer>
          {importantInformationDisplay}
        </TextContainer>
      </Section>
    </>
  );
}

// Styling
const Title = styled.div`
  margin: 10px;
  font-size: 25px;
  border-bottom: 1px solid ${(props) => props.theme.color};

  @media(max-width: 750px) {
    font-size: 20px;
  };
`;

const Label = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;

  @media(max-width: 750px) {
    font-size: 16px;
  };
`;

const Text = styled.li`
  margin-bottom: 10px;
  color: black;
`;

const Section = styled.div`
  margin: 0 10px 20px 10px;
`;

const TextContainer = styled.ul`
  margin: 0;
  list-style: none;
  padding-left: 10px;

  @media(max-width: 750px) {
    font-size: 14px;
  };
`;
