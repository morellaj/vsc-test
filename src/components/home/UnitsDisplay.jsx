// Package dependencies
import React from 'react';
import styled from 'styled-components';
import { flexCenter } from 'Styles';

// File dependencies
import CharacterUnit from './CharacterUnit';

// Data dependencies
import unitDetails from 'Data/unitDetails.json';

// Component
export default function UnitsDisplay() {
  const list = Object.keys(unitDetails).map((key) => {
    const { enabled, title, imgStyle } = unitDetails[key];
    const unit = title.replace(/\s+/g, '-').toLowerCase();
    return (
      <CharacterUnit
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
    <Container>
      {list}
    </Container>
  );
}

// Styling

const Container = styled.section`
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
