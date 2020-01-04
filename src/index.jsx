// Package dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';

// Component dependencies
import AnnotationLayer from 'react-pdf/dist/Page/AnnotationLayer.css';
import Home from './components/home/HomePage';
import CharacterPage from './components/curriculum/CharacterPage';
import PDFPage from './components/pdfs/PDFPage';
import About from './components/other/About';
import BookPage from './components/books/BookPage';


ReactDOM.render((
  <BrowserRouter>
    <Route exact path="/" component={Home} />
    <Route path="/units" component={CharacterPage} />
    <Route path="/book" component={PDFPage} />
    <Route path="/about" component={About} />
    <Route path="/book-recommendations" component={BookPage} />
  </BrowserRouter>), document.getElementById('main'));
