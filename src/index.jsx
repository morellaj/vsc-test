// Package dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import loadable from '@loadable/component';

// Component dependencies
import AnnotationLayer from 'react-pdf/dist/Page/AnnotationLayer.css';
import Home from './components/home/HomePage';
const CharacterPage = loadable(() => import('./components/curriculum/CharacterPage'));
const PDFPage = loadable(() => import('./components/pdfs/PDFPage'));
const About = loadable(() => import('./components/other/About'));
const BookPage = loadable(() => import('./components/books/BookPage'));

ReactDOM.render((
  <BrowserRouter>
    <Route exact path="/" component={Home} />
    <Route path="/units" component={CharacterPage} />
    <Route path="/book" component={PDFPage} />
    <Route path="/about" component={About} />
    <Route path="/book-recommendations" component={BookPage} />
  </BrowserRouter>), document.getElementById('main'));
