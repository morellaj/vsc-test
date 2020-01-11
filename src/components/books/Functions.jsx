// Package dependencies
import React from 'react';

// Component Dependencies
import Book from './Book';


export function createBooksObject(list, books) {
  let booksObject = {};
  for (let i = 0; i < list.length; i++){
    const book = list[i];
    booksObject[book] = books[book];
  }
  return booksObject;
};

export function createBooksList(list, books, setMoreInfo) {
  const arr = list.map((book) => {
    const { title, subtitle, imageLinks} = books[book];
    return (
      <Book
        title = {title}
        subtitle = {subtitle}
        imageLinks = {imageLinks}
        setMoreInfo={setMoreInfo}
        value={book}
        key={book}
      />
    );
  });
  return arr;
}
