
// Package dependencies
import React, { lazy, Suspense } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import character from 'Character';
import ReactGA from 'react-ga';

const Topic = lazy(() => import('./Topic'));

/** ********************************************* */
// Component for displaying the home page
/** ********************************************* */
export default function TopicsDisplay() {
  const list = Object.keys(character).map((key) => {
    const {
      enabled, title, order, imgStyle,
    } = character[key];
    const unit = title.replace(/\s+/g, '-').toLowerCase();
    if (enabled) {
      return (
        <Suspense fallback={<div />} key={title}>
          <StyledLink
            to={`/units?${unit}`}
            onClick={() => ReactGA.event({ category: 'home', action: `clicked ${title}` })}
            key={order}
          >
            <Topic
              enabled={enabled}
              title={title}
              imgStyle={imgStyle}
              unit={unit}
            />
          </StyledLink>
        </Suspense>
      );
    }
    return (
      <Topic
        enabled={enabled}
        title={title}
        imgStyle={imgStyle}
        key={title}
        unit={unit}
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
