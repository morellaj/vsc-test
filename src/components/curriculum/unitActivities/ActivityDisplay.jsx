
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
      text="Parent Info"
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

  @media(max-width: 780px) {
    justify-content: center;
  };
  
`;

const SingleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;

  @media(max-width: 1200px){
    width: 260px;
  };

  @media(max-width: 540px) {
    width: 200px;
  };
`;

const MultipleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;

  @media(max-width: 1200px) {
    width: 500px;
  };

  @media(max-width: 780px) {
    flex-direction: column;
    width: 280px;
  };

  @media(max-width: 540px) {
    width: 200px;
  };
`;
