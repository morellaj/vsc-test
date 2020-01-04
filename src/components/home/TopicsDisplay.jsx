
// Package dependencies
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Component dependencies
import Topic from './Topic';

// Constants
const topicList = [
  {
    id: 1,
    text: 'Hurting Others',
    status: 'Available',
  },
  {
    id: 2,
    text: 'Critical Thinking',
    status: 'Available',
  },
  {
    id: 3,
    text: 'Honesty',
    status: 'Available',
  },
  {
    id: 4,
    text: 'Thinking for Yourself',
    status: 'Date TBD',
  },
  {
    id: 5,
    text: 'Anger',
    status: 'Date TBD',
  },
  {
    id: 6,
    text: 'Sharing',
    status: 'Date TBD',
  },
  {
    id: 7,
    text: 'Gratitude',
    status: 'Date TBD',
  },
  {
    id: 8,
    text: 'Caring',
    status: 'Date TBD',
  },
  {
    id: 9,
    text: 'Making the World a Better Place',
    status: 'Date TBD',
  },
  {
    id: 10,
    text: 'Diversity',
    status: 'Date TBD',
  },
];

/** ********************************************* */
// Component for displaying the home page
/** ********************************************* */
export default function TopicsDisplay() {
  const list = topicList.map((item) => {
    if (item.status === 'Available') {
      return (
        <Link to={`/units?${item.text.replace(/\s+/g, '-').toLowerCase()}`} key={item.id}>
          <Topic status={item.status} text={item.text} />
        </Link>
      );
    }

    return <Topic status={item.status} text={item.text} key={item.id} />;
  });

  return (
    <Container>
      <DisplayContainer>
        {list}
      </DisplayContainer>
    </Container>
  );
}

// Styling

const Container = styled.section`
  display: flex;
  justify-content: center;
`;

const DisplayContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 50px;
`;
