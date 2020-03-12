// Package dependencies
import React from 'react';
import styled from 'styled-components';

// Data dependencies
import activityCategoryText from 'Data/activityCategoryText.json';

// Component
export default function CategoryInformation({ text }) {
  const { sections, title } = activityCategoryText[text];

  const display = sections.map((section) => {
    let i = 0;
    const textDisplay = section.text.map((item) => {
      i += 1;
      return <Text key={i}>{item}</Text>;
    });
    return (
      <SectionContainer key={section.label}>
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

const TextContainer = styled.ul`
  margin: 0;
  list-style: none;
  padding-left: 10px;

  @media(max-width: 750px) {
    font-size: 14px;
  };
`;

const SectionContainer = styled.div`
  margin: 0 10px 20px 10px;
`;
