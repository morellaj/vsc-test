/* eslint-disable react/prop-types */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
// Package dependencies
import React from 'react';
import styled from 'styled-components';


// Component dependencies and data files
import Description from './Description';
import ActivityDisplay from './ActivityDisplay';


// Constants
const iconList = {
  pretend: { text: 'Guided Pretend', singleEnd: '', multipleEnd: '' },
  short: { text: 'Short Stories', singleEnd: '', multipleEnd: '' },
  book: { text: 'Online Interactive Book', multipleEnd: 's' },
  interactive: { text: 'Interactive Activit', singleEnd: 'y', multipleEnd: 'ies' },
  quiz: { text: 'Interactive Quiz', singleEnd: '', multipleEnd: 'zes' },
  parent: { text: 'parent', singleEnd: '', multipleEnd: '' },
};

const descriptionCutoff = 250;

/** ********************************************* */
// Component for displaying the activities section
/** ********************************************* */
export default function UnitActivities(props) {
  const { unit, unit: { activities, description, title } } = props;

  const list = {};
  for (const act in activities) {
    const { category } = activities[act];
    if (list[category]) {
      list[category].activities.push(activities[act]);
    } else {
      list[category] = {
        activities: [activities[act]],
        icon: category,
      };
    }
  }

  for (const cat in list) {
    list[cat].text = list[cat].activities.length > 1
      ? iconList[cat].text + iconList[cat].multipleEnd
      : iconList[cat].text + iconList[cat].singleEnd;
  }

  return (
    <Container>
      <HeaderContainer>
        <Title description={description}>{title}</Title>
        <DescriptionContainer>
          <Description description={description} cutoff={descriptionCutoff} />
        </DescriptionContainer>
      </HeaderContainer>
      <ActivityDisplay list={list} unit={unit} />
    </Container>
  );
}


// Prop validation


// Styling
const Container = styled.div`
  width: 1100px;
  margin: 0 20px;
`;

const HeaderContainer = styled.div`
  border-radius: 3px;
  color: white;
  background-color: ${(props) => props.theme.color};
  margin: 0 20px;
`;

const Title = styled.h1`
  border-bottom: ${(props) => (props.description ? '1px solid white' : null)};
  padding: ${(props) => (props.description ? '10px 0' : '10px 0 0 0')};
  margin: 0 10px;
  font-size: 40px;
`;

const DescriptionContainer = styled.div`
  margin: 0;
  padding: 10px;
`;
