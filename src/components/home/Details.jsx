// Package dependencies
import React from 'react';
import styled from 'styled-components';

// Component dependencies
import { detailsText } from 'Constants';
import DetailItem from './DetailItem';
import DetailsSlides from './DetailsSlides';

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
            <DetailsSlides />
          </SlideshowContainer>
        </RightContainer>
      </ContentContainer>
    </Container>
  );
}

// Styling
const Container = styled.section`
  margin-top: 50px;
  padding: 10px 0;
  background-color: rgb(1,145,218, .1);
`;

const Heading = styled.div`
  text-align: center;
  margin-top: 10px;
  margin-bottom: 25px;
  font-size: 33px;

  @media(max-width: 1050px){
    font-size: 28px;
  }

  @media(max-width: 900px){
    font-size: 24px;
  }
`;

const ContentContainer = styled.div`
  display: flex;

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
`;
