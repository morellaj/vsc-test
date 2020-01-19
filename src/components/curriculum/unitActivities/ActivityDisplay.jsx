
// Package dependencies
import React from 'react';
import styled from 'styled-components';


// Component dependencies
import activityCategoryText from 'Data/activityCategoryText.json';
import ActivityGroup from './ActivityGroup';
import SingleActivity from './SingleActivity';
import ParentInformation from './ParentInformation';


/** ************************************ */
// Component for the description of activities
/** ******************************** */
export default function ActivityDisplay(props) {
  const { list, setInfo, unit: { title } } = props;
  const unit = title.replace(/\s+/g, '-').toLowerCase();
  const singleDisplay = [];
  const multipleDisplay = [];

  singleDisplay.push(
    <ActivityGroup
      text="Parent Information"
      setInfo={setInfo}
      category="parent"
      activities={<ParentInformation unit={unit} setInfo={setInfo} />}
      key="parent"
    />,
  );

  for (const cat in list) {
    const item = list[cat];
    const activities = [];
    for (const act in item.activities) {
      activities.push(
        <SingleActivity title={item.activities[act].title} key={act} />,
      );
    }
    const display = (
      <ActivityGroup
        text={list[cat].text}
        setInfo={setInfo}
        category={cat}
        activities={activities}
        key={cat}
      />
    );

    if (activities.length > 1) {
      multipleDisplay.push(display);
    } else {
      singleDisplay.push(display);
    }
  }

  return (
    <Container>
      <MultipleContainer>{multipleDisplay}</MultipleContainer>
      <SingleContainer>{singleDisplay}</SingleContainer>
    </Container>
  );
}



ActivityDisplay.defaultValues = {
  title: 'Loading...',
};


// Styling
const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SingleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

const MultipleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
`;
