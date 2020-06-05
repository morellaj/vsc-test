// Package dependencies
import React, { lazy, Suspense } from 'react';
import styled from 'styled-components';
import { FaChild, FaSmileBeam, FaGraduationCap, FaMoneyBillWaveAlt, FaHandshake } from 'react-icons/fa';

// File dependencies
import DetailItem from './DetailItem';
import { colors, Heading } from 'Styles';

const DetailsSlides = lazy(() => import('./DetailsSlides'));

// Data dependencies
const detailsText = [
  {
    id: 1,
    label: 'Engaging',
    text: ' Kids love choosing what happens in the story',
    Icon: FaChild,
  },
  {
    id: 2,
    label: 'Easy',
    text: ' Simple to access and no prep required',
    Icon: FaSmileBeam,
  },
  {
    id: 3,
    label: 'Free',
    text: 'All current content will remain openly available',
    Icon: FaMoneyBillWaveAlt,
  },
  {
    id: 4,
    label: 'Research-Based',
    text: ' Based on literature from child development experts',
    Icon: FaGraduationCap,
  },
  {
    id: 5,
    label: 'Community-Driven',
    text: ' Guided by feedback and requests from our users',
    Icon: FaHandshake,
  },
];

const itemList = detailsText.map((item) => <DetailItem item={item} key={item.id} />);

// Component
export default function SitePerks() {
  return (
    <Container>
      <Heading>Free online stories for kids that teach social and emotional skills!</Heading>
      <ContentContainer>
        <List>
          {itemList}
        </List>
        <SlideshowContainer>
          <Suspense fallback={<div />}>
            <DetailsSlides />
          </Suspense>
        </SlideshowContainer>
      </ContentContainer>
    </Container>
  );
}

// Styling
const Container = styled.article`
  padding: 10px 0;
  background-color: ${colors.LITS.lighterColor};
  font-size: 18px;
`;

const ContentContainer = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
  margin-top: 1.4em;

  @media (max-width: 1000px){
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
  }
`;

const List = styled.ul`
  font-size: 1em;
  max-width: 450px;
`;

const SlideshowContainer = styled.div`
  max-width: 500px;
  width: 100%;
  height: 300px;
  position:relative;

  @media(max-width: 500px){
    height: 60vw;
  }
`;
