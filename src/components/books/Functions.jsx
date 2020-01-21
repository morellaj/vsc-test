// Package dependencies
import React from 'react';
import styled from 'styled-components';

// Component Dependencies
import Book from './Book';


export function createBooksList(list, books) {
  const arr = list.map((book) => {
    const {
      title, subtitle, image, link,
    } = books[book];
    return (
      <Book
        title={title}
        subtitle={subtitle}
        image={image}
        link={link}
        key={book}
      />
    );
  });

  return arr;
}

// Styling
const Hidden = styled.div`
  flex: 1 0 200px;
`;
