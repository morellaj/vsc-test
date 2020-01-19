// Package dependencies
import React from 'react';
import styled from 'styled-components';

// Component dependencies
import activityCategoryText from 'Data/activityCategoryText.json';

/** ************************************ */
// Component for the description of activities
/** ******************************** */
export default function CategoryInformation(props) {
  const { text } = props;
  const { sections, title } = activityCategoryText[text];

  const display = sections.map((section) => {
    const textDisplay = section.text.map((item) => <Text>{item}</Text>);
    return (
      <SectionContainer>
        <Label>{section.label}</Label>
        <TextContainer>{textDisplay}</TextContainer>
      </SectionContainer>
    );
  });

  return (
    <>
      <Title>{title}</Title>
      {display}
    </>
  );
}



// Styling
const Title = styled.div`
  margin: 10px;
  font-size: 36px;
  border-bottom: 1px solid ${(props) => props.theme.color}
`;

const Label = styled.div`
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const Text = styled.li`
  margin-bottom: 10px;
  color: black;
`;

const TextContainer = styled.ul`
  margin: 0;
`;

const SectionContainer = styled.div`
  margin: 0 10px 20px 10px;
`;
