// Package dependencies
import React from 'react';
import styled from 'styled-components';


// Component dependencies
import DetailItem from './DetailItem';
import Slides from './Slides';

// Constants
const pictureList = [
  {
    id: 1,
    src: '../../assets/Detail1.webp',
  },
  {
    id: 2,
    src: '../../assets/Detail9.webp',
  },
  {
    id: 3,
    src: '../../assets/Detail3.webp',
  },
  {
    id: 4,
    src: '../../assets/Detail4.webp',
  },
  {
    id: 5,
    src: '../../assets/Detail7.webp',
  },
];

const fadeProperties = {
  duration: 10000,
  transitionDuration: 1000,
  arrows: false,
};

const detailsList = [
  {
    id: 1,
    label: 'Engaging',
    text: ' Characters and stories that kids love',
    icon: 'child',
  },
  {
    id: 2,
    label: 'Easy',
    text: ' Simple to access and no prep required',
    icon: 'smile',
  },
  {
    id: 3,
    label: 'Free',
    text: 'All current content will remain openly available',
    icon: 'money',
  },
  {
    id: 4,
    label: 'Research-Based',
    text: ' Based on literature from child development experts',
    icon: 'smart',
  },
  {
    id: 5,
    label: 'Community-Driven',
    text: ' Guided by feedback and request from our users',
    icon: 'shake',
  },
];

/** ********************************************* */
// Component for displaying the home page
/** ********************************************* */
export default function Details() {
  const itemList = detailsList.map((item) => <DetailItem item={item} key={item.id} />);
  return (
    <Container>
      <Heading>Improving your kid&#39;s behavior has never been this easy, or this fun!</Heading>
      <ContentContainer>
        <TextContainer>
          {itemList}
        </TextContainer>
        <SlideshowContainer>
          <Slides pictureList={pictureList} type="Detail" fadeProperties={fadeProperties} />
        </SlideshowContainer>
      </ContentContainer>
    </Container>
  );
}

// Styling
const Container = styled.section`
  margin-top: 50px;
  padding: 20px;
  background-color: rgb(1,145,218, .1);
`;

const Heading = styled.h1`
  text-align: center;
  margin-bottom: 50px;
  font-size: 40px;
`;

const ContentContainer = styled.div`
  display: flex;
`;

const TextContainer = styled.ul`
  width: 50%;
  font-size: 25px;
  list-style-type: none;
  padding-right: 30px;
`;

const SlideshowContainer = styled.div`
  width: 50%;
`;
