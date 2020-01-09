// Package dependencies
import React from 'react';

// Component Dependencies
import Book from './Book';

// Data files
import books from '../../data/books.json';


// Function for creating a list of books
export default function ListCreator(list, object, setMoreInfo) {
  const arr = list.map((book) => {
    object[book] = books[book];
    return (
      <Book
        currentBook={books[book]}
        setMoreInfo={setMoreInfo}
        value={book}
        key={book}
      />
    );
  });
  return arr;
}
