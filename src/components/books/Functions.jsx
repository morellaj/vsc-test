// Package dependencies
import React from 'react';

// Component Dependencies
import Book from './Book';

// Function
export default function createBooksList(list, books) {
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
