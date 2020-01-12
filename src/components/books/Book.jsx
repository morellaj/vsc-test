// Package dependencies
import React from 'react';
import styled from 'styled-components';


// Component dependencies
import BookImage from './BookImage';


// Component for displaying an individual book
export default function Book(props) {
  const {
    value, subtitle, title, imageLinks,
  } = props;
  const titleDisplay = subtitle ? (
    <Title>
      {`${title}: `}
      <SubTitle>{subtitle}</SubTitle>
    </Title>
  ) : <Title>{title}</Title>;
  return (
    <Container onClick={() => props.setMoreInfo(value)}>
      <BookImage imageLinks={imageLinks} />
      {titleDisplay}
    </Container>
  );
}


// Styling
const Container = styled.div`
  padding: 20px;
  border-radius: 20px;
  width: 170px;

  :hover{
    background-color: lightgray;
    cursor: pointer;
  }
`;

const Title = styled.div`
  text-align: center;
  margin-top: 10px;
  font-size: 18px;
  font-weight: 600;
`;

const SubTitle = styled.span`
  font-size: 16px;
  font-weight: 400;
`;
