// Package dependencies
import React, { useState } from 'react';
import styled from 'styled-components';


// Component dependencies
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import Section from './Section';
import BookDetails from './BookDetails';
import ListCreator from './ListCreator';


// Data files
import { booksByUnit, character } from '../../master.json';

// Constants
const unitList = {
  'hurting-others': 'I-1',
  'critical-thinking': 'C-1',
  honesty: 'S-1',
};

// Component for displaying book pages
export default function BookPage() {
  const [moreInfo, setMoreInfo] = useState();
  const section = unitList[window.location.search.slice(1)];
  const bookList = booksByUnit[section];
  const booksObj = {};
  const primaryList = ListCreator(bookList.primary, booksObj, setMoreInfo);
  const secondaryList = ListCreator(bookList.secondary, booksObj, setMoreInfo);
  const details = Object.Prototype.hasOwnProperty.call(booksObj, moreInfo)
    ? booksObj[moreInfo] : null;

  return (
    <>
      <Navbar />
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
        <BookDetails section={section} book={details} setMoreInfo={setMoreInfo} />
      </Container>
      <Footer />
    </>
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
