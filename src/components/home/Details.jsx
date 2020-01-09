// Package dependencies
import React from 'react';
import styled from 'styled-components';

// Component dependencies
import { detailsConstants } from 'Constants';
import DetailItem from './DetailItem';
import Slides from './Slides';

const { textList, pictureList, slideProperties } = detailsConstants;

/** ********************************************* */
// Component for displaying the home page
/** ********************************************* */
export default function Details() {
  const itemList = textList.map((item) => <DetailItem item={item} key={item.id} />);
  return (
    <Container>
      <Heading>Improving your kid&#39;s behavior has never been this easy, or this fun!</Heading>
      <ContentContainer>
        <TextContainer>
          {itemList}
        </TextContainer>
        <SlideshowContainer>
          <Slides pictureList={pictureList} type="Detail" fadeProperties={slideProperties} />
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
