// Package dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route, Switch, BrowserRouter, hashHistory,
} from 'react-router-dom';
import loadable from '@loadable/component';

// Component dependencies
/*
import Home from './components/home/HomePage';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import CharacterPage from './components/curriculum/CharacterPage';
import PDFPage from './components/pdfs/PDFPage';
import About from './components/other/About';
import BookPage from './components/books/BookPage';
*/
const Home = loadable(() => import ('./components/common/footer'));
const Navbar = loadable(() => import ('./components/common/Navbar'));
const Footer = loadable(() => import ('./components/common/footer'));
const CharacterPage = loadable(() => import('./components/curriculum/CharacterPage'));
const PDFPage = loadable(() => import('./components/pdfs/PDFPage'));
const About = loadable(() => import('./components/other/About'));
const BookPage = loadable(() => import('./components/books/BookPage'));


ReactDOM.render((
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/units" component={CharacterPage} />
      <Route path="/book" component={PDFPage} />
      <Route path="/about" component={About} />
      <Route path="/book-recommendations" component={BookPage} />
      <Route path="/feedback" component={Home} />
      <Route path="/update-sign-up" component={Home} />
      <Route path="/topic-recommendation" component={Home} />
      <Route component={CharacterPage} />
    </Switch>
    <Footer />
  </BrowserRouter>), document.getElementById('main'));
