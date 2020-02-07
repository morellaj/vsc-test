// Package dependencies
import React, { lazy, Suspense } from 'react';
import styled from 'styled-components';
import { Heading } from 'Styles';
import {
  faChild,
  faSmileBeam,
  faGraduationCap,
  faMoneyBillWaveAlt,
  faHandshake,
} from '@fortawesome/free-solid-svg-icons';
import DetailItem from './DetailItem';


const DetailsSlides = lazy(() => import('./DetailsSlides'));

const detailsText = [
  {
    id: 1,
    label: 'Engaging',
    text: ' Characters and stories that kids love',
    icon: faChild,
  },
  {
    id: 2,
    label: 'Easy',
    text: ' Simple to access and no prep required',
    icon: faSmileBeam,
  },
  {
    id: 3,
    label: 'Free',
    text: 'All current content will remain openly available',
    icon: faMoneyBillWaveAlt,
  },
  {
    id: 4,
    label: 'Research-Based',
    text: ' Based on literature from child development experts',
    icon: faGraduationCap,
  },
  {
    id: 5,
    label: 'Community-Driven',
    text: ' Guided by feedback and requests from our users',
    icon: faHandshake,
  },
];

/** ********************************************* */
// Component for displaying the home page
/** ********************************************* */
export default function Details() {
  const itemList = detailsText.map((item) => <DetailItem item={item} key={item.id} />);
  return (
    <Container>
      <Heading>Improving your kid&#39;s behavior has never been this easy, or this fun!</Heading>
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
