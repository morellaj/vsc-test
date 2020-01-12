// Package dependencies
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Component dependencies
import character from 'Data/character.json';

/** ************************************ */
// Component for the description of activities
/** ******************************** */
export default function LearningGoals(props) {
  const { unit } = props;
  const { learningGoals, importantInformation } = character[unit];

  const learningGoalsDisplay = learningGoals.map((goal) => {
    return <Text>{goal}</Text>;
  });

  const importantInformationDisplay = importantInformation.map((info) => {
    return <Text>{info}</Text>;
  });
  return (
    <>
      <Title>Topic Goals</Title>
      <Section>
        <Label>Learning Goals for Kids</Label>
        {learningGoalsDisplay}
      </Section>
      <Section>
        <Label>Important Information for Parents</Label>
        {importantInformationDisplay}
      </Section>
    </>
  );
}

// Props validation



// Styling
const Title = styled.div`
  margin: 10px;
  font-size: 36px;
  border-bottom: 1px solid ${(props) => props.theme.color}
`;

const Label = styled.div`
  font-size: 25px;
  font-weight: 700;
`;

const Text = styled.li`
  margin-bottom: 10px;
  color: black;
`;

const Section = styled.div`
  margin: 0 10px 20px 10px;
`;
