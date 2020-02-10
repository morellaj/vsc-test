/* eslint-disable react/destructuring-assignment */
// Package dependencies
import React from 'react';
import styled from 'styled-components';


// Component dependencies and data files
import { unitActivitiesConstants } from 'Constants';
import ActivityDisplay from './ActivityDisplay';
import SocialShare from './SocialShare';

const { iconList } = unitActivitiesConstants;

/** ********************************************* */
// Component for displaying the activities section
/** ********************************************* */
export default function UnitActivities(props) {
  const {
    unit, unitName, setInfo, unit: { activities, description, title },
  } = props;

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
        <SocialShare unitName={unitName} title={props.title} subtitle={props.subtitle} description={props.description} />
      </HeaderContainer>
      <ActivityDisplay list={list} unit={unit} setInfo={setInfo} />
    </Container>
  );
}


// Prop validation


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

  @media(max-width: 1200px) {
    margin: 0 10px;
  }

  @media(max-width: 1000px) {
    display: none;
  }
`;

const Title = styled.h1`
  /*border-bottom: ${(props) => (props.description ? '1px solid white' : null)};*/
  white-space: nowrap;
  padding: ${(props) => (props.description ? '10px 0' : '10px 0 0 0')};
  margin: 0 10px;
  font-size: 40px;
`;
