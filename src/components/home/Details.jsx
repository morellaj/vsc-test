// Package dependencies
import React, { lazy, Suspense } from 'react';
import styled from 'styled-components';
import { FaChild, FaSmileBeam, FaGraduationCap, FaMoneyBillWaveAlt, FaHandshake } from 'react-icons/fa';

// File dependencies
import DetailItem from './DetailItem';
import { Heading } from 'Styles';
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
export default function Details() {
  return (
    <Container>
      <Heading>Free online stories for kids that teach social and emotional skills!</Heading>
      <ContentContainer>
        <TextContainer>
          <List>
            {itemList}
          </List>
        </TextContainer>
        <RightContainer>
          <SlideshowContainer>
            <Suspense fallback={<div />}>
              <DetailsSlides />
            </Suspense>
          </SlideshowContainer>
        </RightContainer>
      </ContentContainer>
    </Container>
  );
}

// Styling
const Container = styled.section`
  padding: 10px 0;
  background-color: rgb(1,145,218, .1);
`;

const ContentContainer = styled.div`
  display: flex;
  margin-top: 25px;

  @media (max-width: 1000px){
    flex-direction: column-reverse;
    align-items: center;
  }
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;

  @media(max-width: 1000px){
    width: 100%;
  }
`;

const List = styled.ul`
  font-size: 18px;
  list-style-type: none;
  padding: 0;
  margin: 0;
  max-width: 450px;
  padding: 0 3px;
`;

const RightContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;

  @media(max-width: 1000px){
    width: 100%;
  }
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
