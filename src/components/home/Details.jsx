// Package dependencies
import React from 'react';
import styled from 'styled-components';


// Component dependencies
import DetailItem from './DetailItem';
import Slides from './Slides';

/************************************************/
// Component for displaying the home page
/************************************************/
export default function Details(props){ 
  const itemList = detailsList.map((item, i) => {
    return <DetailItem item={item} key={i}/>
  })
  return (
    <Container>
      <Heading>Improving your kid's behavior has never been this easy, or this fun!</Heading>
      <ContentContainer>
        <TextContainer>
          {itemList}
        </TextContainer>
        <SlideshowContainer>
          <Slides pictureList={pictureList} type="Detail" fadeProperties={fadeProperties}/>
        </SlideshowContainer>
      </ContentContainer>
    </Container>
  );
}

// Constants
const pictureList = [1, 9, 3, 4, 7, 11, 2, 5, 6, 8, 10];

const fadeProperties = {
  duration: 10000,
  transitionDuration: 1000,
  arrows: false
}

const detailsList = [
  {
    label: 'Engaging',
    text: ' Characters and stories that kids love',
    icon: 'child'
  },
  {
    label: 'Easy',
    text: ' Simple to access and no prep required',
    icon: 'smile'
  },
  {
    label: 'Free',
    text: 'All current content will remain openly available',
    icon: 'money'
  },
  {
    label: 'Research-Based',
    text: ' Based on literature from child development experts',
    icon: 'smart'
  },
  {
    label: 'Community-Driven',
    text: ' Guided by feedback and request from our users',
    icon: 'shake'
  }
]

// Styling
const Container = styled.section`
  margin-top: 50px;
  padding: 20px;
  background-color: rgb(1,145,218, .1);
`

const Heading = styled.h1`
  text-align: center;
  margin-bottom: 50px;
  font-size: 40px;
`

const ContentContainer = styled.div`
  display: flex;
`

const TextContainer = styled.ul`
  width: 50%;
  font-size: 25px;
  list-style-type: none;
  padding-right: 30px;
`

const SlideshowContainer = styled.div`
  width: 50%;
`