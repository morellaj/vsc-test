/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
// Package dependencies
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


// Component dependencies
import ActivityGroup from './ActivityGroup';
import SingleActivity from './SingleActivity';
import ParentInformation from './ParentInformation';

// Constants
const categoryText = {
  book: [
    'Fun, interactive stories that teach important lessons',
    'Kids get to make decisions for the characters',
    'Kids consider the consequences of different choices',
    'Designed to gradually influence children towards better, more intentional behavior',
  ],
  short: [
    'Collections of short stories that teach important lessons',

  ],
  quiz: [
    'Questions about difficult situations presented as a book',
    'Kids think and answer questions about the topic',
    "Further internalizes kid's understanding",
  ],
  pretend: [
    'Fun story where kids move around and act out different parts of the story',
    'Physically acting out the right choice increases the chance that kids will make that choice in real life',
  ],
  parent: [
    'Short article to inform parents on the topic',
    'Lets parents know what behavior is typical as well as what they can do to influence their child',
    'Also recommendations for books and shows that offer additional learning',
  ],
};

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
      categoryText={categoryText.parent}
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
        categoryText={categoryText[cat]}
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
  title: PropTypes.string.isRequired,
};

ActivityDisplay.defaultValues = {
  title: '',
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
