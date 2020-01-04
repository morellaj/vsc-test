// Package dependencies
import React from 'react';

// Component Dependencies
import Book from './Book';

// Data files
import {books} from '../../master.json';


// Function for creating a list of books
export default function ListCreator(list, obj, setMoreInfo) {
  const arr = list.map(book => {
    obj[book] = books[book];
    return (
      <Book 
       currentBook={books[book]} 
       setMoreInfo={setMoreInfo} 
       value = {book}
       key={book}/>
      )
  });
  return arr;
}

