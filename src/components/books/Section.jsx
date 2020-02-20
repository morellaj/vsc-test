// Package dependencies
import React from 'react';
import styled from 'styled-components';

// Data files
import colors from 'Colors';

// Component
export default function Section(props) {
  const { section, bookList } = props;
  return (
    <Container>
      <InnerContainer>
        <SectionHeader>{section}</SectionHeader>
        <BooksContainer>
          {bookList}
        </BooksContainer>
      </InnerContainer>
    </Container>
  );
}


// Styling
const Container = styled.div`
  margin-bottom: 20px;
  border-radius: 20px;
  width: 100%;
  background-color: white;
  border-radius: 5px;
  border-bottom: 1px solid rgba(0,0,0,0.4);
`;

const InnerContainer = styled.div`
  margin: 20px;
`;

const BooksContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 20px;
  margin-top: 20px;

  @media (max-width: 912px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 678px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const SectionHeader = styled.div`
  margin: 0;
  border-bottom: 1px solid ${colors.LITS.color};
  font-size: 25px;
  font-weight: 500;

  @media (max-width: 1200px) {
    font-size: 20px;
  };

  @media (max-width: 540px) {
    font-size: 16px;
  };
`;
