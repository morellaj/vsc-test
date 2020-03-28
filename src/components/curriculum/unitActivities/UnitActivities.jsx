// Package dependencies
import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

// File dependencies
import { unitActivitiesConstants } from 'Constants';
import ActivityDisplay from './ActivityDisplay';
import SocialShare from './SocialShare';

// Data dependencies
import character from 'Character';
const { iconList } = unitActivitiesConstants;

// Component
export default function UnitActivities() {
  const { unitSelected } = useSelector((state) => state.unitReducer);
  const { activities, description, title } = character[unitSelected];
  const list = {};
  const activityKeys = Object.keys(activities);
  const actValues = Object.values(activities);

  for (let i = 0; i < activityKeys.length; i += 1) {
    const act = actValues[i];
    const { category } = act;
    if (list[category]) {
      list[category].activities.push(act);
    } else {
      list[category] = {
        activities: [act],
        icon: category,
      };
    }
  }

  const listKeys = Object.keys(list);
  const listValues = Object.values(list);
  for (let i = 0; i < listKeys.length; i += 1) {
    const item = listValues[i];
    const icon = iconList[listKeys[i]];
    item.text = item.activities.length > 1
      ? icon.text + icon.multipleEnd
      : icon.text + icon.singleEnd;
  }

  return (
    <Container>
      <HeaderContainer>
        <Title description={description}>{title}</Title>
        <SocialShare />
      </HeaderContainer>
      <ActivityDisplay list={list} />
    </Container>
  );
}

// Styling
const Container = styled.div`
  width: 100%;
`;

const HeaderContainer = styled.div`
  border-radius: 3px;
  color: white;
  background-color: ${(props) => props.theme.color};
  display: flex;
  justify-content: space-between;

`;

const Title = styled.h1`
  white-space: nowrap;
  padding: ${(props) => (props.description ? '10px 0' : '10px 0')};
  margin: 0 10px;
  font-size: 40px;

  @media(max-width: 800px){
    font-size: 30px;
  }

  @media(max-width: 570px){
    font-size: 20px;
  }
`;
