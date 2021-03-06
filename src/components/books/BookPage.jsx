// Package dependencies
import React, { useEffect } from 'react';
import styled from 'styled-components';
import Head from 'Head';
import { Link } from 'react-router-dom';


// Component dependencies

// Data files
import Navbar from 'Navbar';
import Footer from 'Footer';
import books from 'Data/books.json';
import booksByUnit from 'Data/booksByUnit.json';
import character from 'Data/character.json';
import { booksUnitList, baseUrl } from 'Constants';
import ReactGA from 'react-ga';
import { createBooksList } from './Functions';
import Section from './Section';

// Component for displaying book pages
export default function BookPage() {
  const location = window.location.search.slice(1).split('&')[0].split('=')[0];
  const section = booksUnitList[location];
  const { bookTitle, bookDescription } = character[section];
  const bookList = booksByUnit[section];
  const primaryList = createBooksList(bookList.primary, books);
  const secondaryList = createBooksList(bookList.secondary, books);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  const bookUrl = `${baseUrl}book-recommendations?${location}`;

  const schema = [
    {
      "@type": ["CollectionPage"],
      "@id": `${bookUrl}/#webpage`,
      "url": bookUrl,
      "name": bookTitle,
      "isPartOf": {
        "@id": `${baseUrl}#website`
      },
      "inLanguage": "en-US",
      "about": {
        "@id": `${baseUrl}#organization`
      },
      "description": bookDescription
    }
  ];

  return (
    <>
      <Head
        title={bookTitle}
        description={bookDescription}
        url={bookUrl}
        type="website"
        image={`${baseUrl}assets/${location}-social.jpg`}
        height="500"
        width="500"
        schema={schema}
      />
      <Navbar />
      <Container>
        <InnerContainer>
          <Header>
            <HeaderTitle>Book Recommendations</HeaderTitle>
            <HeaderSubTitle>{`${character[section].title}`}</HeaderSubTitle>
          </Header>
          <Disclaimer>
          Click a book to see it on Amazon.  Your purchases through Amazon help us remain independent and ad-free.
          </Disclaimer>
          <Section
            section="Our Favorites"
            bookList={primaryList}
          />
          <Section
            section="Other Recommendations"
            bookList={secondaryList}
          />
          <Disclaimer>
            <Link to="/disclosure">
              Our FCC/affiliate disclosure
            </Link>
          </Disclaimer>
        </InnerContainer>
      </Container>
      <Footer />
    </>
  );
}

// Styling
const Container = styled.main`
  display: flex;
  justify-content: center;
  padding: 0 10px 100px 10px;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 840px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const Disclaimer = styled.div`
  width: 100%;
  font-size: 14px;

  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

const HeaderTitle = styled.div`
  font-size: 35px;
  font-weight: 600;
  text-align: center;

  @media (max-width: 500px) {
    font-size: 28px;
  }
`;

const HeaderSubTitle = styled.div`
  font-size: 28px;

  @media (max-width: 500px) {
    font-size: 24px;
  }
`;
