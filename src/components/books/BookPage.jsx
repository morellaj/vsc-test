// Package dependencies
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


// Component dependencies

// Data files
import books from 'Data/books.json';
import booksByUnit from 'Data/booksByUnit.json';
import character from 'Data/character.json';
import { booksUnitList } from 'Constants';
import { createBooksObject, createBooksList } from './Functions';
import BookDetails from './BookDetails';
import Section from './Section';


// Component for displaying book pages
export default function BookPage() {
  const [moreInfo, setMoreInfo] = useState();
  const section = booksUnitList[window.location.search.slice(1)];
  const bookList = booksByUnit[section];
  const fullList = bookList.primary.concat(bookList.secondary);
  const booksObject = createBooksObject(fullList, books);
  const primaryList = createBooksList(bookList.primary, books, setMoreInfo);
  const secondaryList = createBooksList(bookList.secondary, books, setMoreInfo);
  const details = booksObject.hasOwnProperty(moreInfo) ? booksObject[moreInfo] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const bookDetails = details
    ? <BookDetails section={section} book={details} setMoreInfo={setMoreInfo} /> : null;

  return (
    <Container>
      <Header>
        <HeaderTitle>Book Recommendations</HeaderTitle>
        <HeaderSubTitle>{`${section}: ${character[section].title}`}</HeaderSubTitle>
      </Header>
      <Section
        section="Our Favorites"
        bookList={primaryList}
      />
      <Section
        section="Other Recommendations"
        bookList={secondaryList}
      />
      {bookDetails}
    </Container>
  );
}

// Styling
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 40px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const HeaderTitle = styled.div`
  font-size: 35px;
  font-weight: 600;
`;

const HeaderSubTitle = styled.div`
  font-size: 28px;
`;
