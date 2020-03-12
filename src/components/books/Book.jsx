// Package dependencies
import React from 'react';
import ReactGA from 'react-ga';
import styled from 'styled-components';

// Component
export default function Book({ link, subtitle, title, image }) {
  const titleDisplay = subtitle ? (
    <Title>
      {`${title}: `}
      <SubTitle>{subtitle}</SubTitle>
    </Title>
  ) : <Title>{title}</Title>;
  return (
    <Container href={link} onClick={() => ReactGA.event({ category: 'book-recommendations', action: `clicked${title}` })} target="_blank">
      <BookContainer>
        <Image alt={title} src={image} />
      </BookContainer>
      {titleDisplay}
    </Container>
  );
}

// Styling
const Container = styled.a`
  border-radius: 5px;
  text-decoration: none;
  color: #357bf0;
  font-weight: 500;
  display: flex;
  flex-direction: column;

  :hover{
    background-color: lightgray;
    cursor: pointer;
  }
`;

const Title = styled.div`
  text-align: center;
  margin-top: 10px;
  font-size: 14px;
  flex: 0 0 40px;

`;

const SubTitle = styled.span`
  font-size: 16px;
  font-weight: 400;
`;

const BookContainer = styled.div`
  border-radius: 5px;
  border: 1px solid lightgray;
  height: 200px;

  @media (max-width: 912px) {
    height: 28vw;
  }

  @media (max-width: 678px) {
    height: 40vw;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
