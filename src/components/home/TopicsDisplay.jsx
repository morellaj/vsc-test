
// Package dependencies
import React from 'react';
import styled from 'styled-components';
import loadable from '@loadable/component';
import { Link } from 'react-router-dom';

// Component dependencies
import { topicList } from 'Constants';
const Topic = loadable(() => import('./Topic'));

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
          />
        </StyledLink>
      );
    }

    return (
      <Topic
        done={item.done}
        text={item.text}
        imgStyle={item.imgStyle}
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

  @media(max-width: 1000px){
    padding: 0 30px;
  }

  @media(max-width: 500px){
    padding: 0 10px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
