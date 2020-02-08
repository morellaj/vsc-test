
// Package dependencies
import React, { lazy, Suspense } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { topicList } from 'Constants';
import ReactGA from 'react-ga';

const Topic = lazy(() => import('./Topic'));

/** ********************************************* */
// Component for displaying the home page
/** ********************************************* */
export default function TopicsDisplay() {
  const list = topicList.map((item) => {
    const {
      done, text, id, imgStyle,
    } = item;
    if (done) {
      return (
        <Suspense fallback={<div />} key={id}>
          <StyledLink
            to={`/units?${text.replace(/\s+/g, '-').toLowerCase()}`}
            onClick={() => ReactGA.event({ category: 'home', action: `clicked ${text}` })}
            key={id}
          >
            <Topic
              done={done}
              text={text}
              imgStyle={imgStyle}
            />
          </StyledLink>
        </Suspense>
      );
    }

    return (
      <Topic
        done={done}
        text={text}
        imgStyle={imgStyle}
        key={id}
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
