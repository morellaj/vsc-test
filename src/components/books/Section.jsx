// Package dependencies
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Data files
import colors from 'Colors';


// Component for displaying a section of the book page
export default function Section(props) {
  const { section, bookList } = props;
  return (
    <Container>
      <SectionHeader>{section}</SectionHeader>
      <BooksContainer>
        {bookList}
      </BooksContainer>
    </Container>
  );
}

Section.propTypes = {
  section: PropTypes.string.isRequired,
  bookList: PropTypes.arrayOf(PropTypes.number).isRequired,
};


// Styling
const Container = styled.div`
  padding: 20px 20px 0 20px;
  margin-bottom: 20px;
  border-radius: 20px;
  max-width: 1100px;
  background-color: white;
`;

const BooksContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: left;
`;

const SectionHeader = styled.h1`
  margin: 0;
  border-bottom: 1px solid ${colors.LITS.color};
`;
