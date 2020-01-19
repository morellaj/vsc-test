
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
    done: true,
    imgStyle: {},
    containerStyle: {
      display: 'flex',
      alignItems: 'center',
    },
  },
  {
    id: 2,
    text: 'Critical Thinking',
    done: true,
    imgStyle: {},
    containerStyle: {},
  },
  {
    id: 3,
    text: 'Honesty',
    done: true,
    imgStyle: { bottom: '0' },
    containerStyle: {},
  },
  {
    id: 4,
    text: 'Thinking for Yourself',
    done: false,
    imgStyle: { top: '0' },
    containerStyle: {},
  },
  {
    id: 5,
    text: 'Anger',
    done: false,
    imgStyle: { top: '20px' },
    containerStyle: {},
  },
  {
    id: 6,
    text: 'Sharing',
    done: false,
    imgStyle: {},
    containerStyle: {
      display: 'flex',
      alignItems: 'center',
    },
  },
  {
    id: 7,
    text: 'Gratitude',
    done: false,
    imgStyle: {},
    containerStyle: {},
  },
  {
    id: 8,
    text: 'Caring',
    done: false,
    imgStyle: {},
    containerStyle: {
      display: 'flex',
      alignItems: 'center',
    },
  },
  {
    id: 9,
    text: 'Making the World Better',
    done: false,
    imgStyle: {},
    containerStyle: {
      display: 'flex',
      alignItems: 'center',
    },
  },
  {
    id: 10,
    text: 'Diversity',
    done: false,
    imgStyle: {},
    containerStyle: {
      display: 'flex',
      alignItems: 'center',
    },
  },
];

/** ********************************************* */
// Component for displaying the home page
/** ********************************************* */
export default function TopicsDisplay() {
  const list = topicList.map((item) => {
    if (item.done) {
      return (
        <StyledLink to={`/units?${item.text.replace(/\s+/g, '-').toLowerCase()}`} key={item.id}>
          <Topic
            done={item.done}
            text={item.text}
            imgStyle={item.imgStyle}
            containerStyle={item.containerStyle}
          />
        </StyledLink>
      );
    }

    return (
      <Topic
        done={item.done}
        text={item.text}
        imgStyle={item.imgStyle}
        containerStyle={item.containerStyle}
        key={item.id}
      />
    );
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

const StyledLink = styled(Link)`
  text-decoration: none;
`;
