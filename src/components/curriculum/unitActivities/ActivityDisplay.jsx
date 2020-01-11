
// Package dependencies
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


// Component dependencies
import { activityCategoryText } from 'Constants';
import ActivityGroup from './ActivityGroup';
import SingleActivity from './SingleActivity';
import ParentInformation from './ParentInformation';


/** ************************************ */
// Component for the description of activities
/** ******************************** */
export default function ActivityDisplay(props) {
  const { list, unit: { title } } = props;
  const unit = title.replace(/\s+/g, '-').toLowerCase();
  const singleDisplay = [];
  const multipleDisplay = [];

  singleDisplay.push(
    <ActivityGroup
      text="Parent Information"
      categoryText={activityCategoryText.parent}
      activities={<ParentInformation unit={unit} />}
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
        categoryText={activityCategoryText[cat]}
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

// Props validation
ActivityDisplay.propTypes = {
  unit: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ])).isRequired,
  list: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ])).isRequired,
  title: PropTypes.string,
};

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
