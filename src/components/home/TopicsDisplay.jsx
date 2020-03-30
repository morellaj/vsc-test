// Package dependencies
import React, { lazy } from 'react';
import styled from 'styled-components';
import { flexCenter } from 'Styles';

// File dependencies
const Topic = lazy(() => import('./Topic'));

// Data dependencies
import character from 'Character';

// Component
export default function TopicsDisplay() {
  const list = Object.keys(character).map((key) => {
    const { enabled, title, imgStyle } = character[key];
    const unit = title.replace(/\s+/g, '-').toLowerCase();
    return (
      <Topic
        to={`/units?${unit}`}
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
  padding: 0 2.5em;
  font-size: 20px;

  @media(max-width: 1000px){
    font-size: 16px;
    padding: 1em;
  }

  @media(max-width: 600px){
    font-size: 12px;
  }
`;
