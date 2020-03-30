// Package dependencies
import React, { lazy, Suspense } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';
import { flexCenter } from 'Styles';

// File dependencies
const Topic = lazy(() => import('./Topic'));

// Data dependencies
import character from 'Character';

// Component
export default function TopicsDisplay() {
  const list = Object.keys(character).map((key) => {
    const { enabled, title, order, imgStyle } = character[key];
    const unit = title.replace(/\s+/g, '-').toLowerCase();
    if (enabled) {
      return (
        <Suspense fallback={<div />} key={title}>
          <Link
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
          </Link>
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
    <DisplayContainer>
      {list}
    </DisplayContainer>
  );
}

// Styling

const DisplayContainer = styled.section`
  ${flexCenter};
  flex-wrap: wrap;
  padding: 0 50px;

  @media(max-width: 1000px){
    padding: 0 30px;
  }

  @media(max-width: 500px){
    padding: 0 10px;
  }
`;
