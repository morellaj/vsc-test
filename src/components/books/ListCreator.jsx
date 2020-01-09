// Package dependencies
import React from 'react';

// Component Dependencies
import books from 'Data/books.json';
import Book from './Book';


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
