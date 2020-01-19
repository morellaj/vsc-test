// Package dependencies
import loadable from '@loadable/component';
import React from 'react';
import 'typeface-roboto';
import ReactDOM from 'react-dom';


import {
  Route, Switch, BrowserRouter,
} from 'react-router-dom';


// Component dependencies
const Home = loadable(() => import('./components/home/HomePage'));
const Navbar = loadable(() => import('./components/common/Navbar'));
const Footer = loadable(() => import('./components/common/Footer'));
const CharacterPage = loadable(() => import('./components/curriculum/CharacterPage'));
const PDFPage = loadable(() => import('./components/pdfs/PDFPage'));
const AboutPage = loadable(() => import('./components/other/AboutPage'));
const BookPage = loadable(() => import('./components/books/BookPage'));
const FeedbackPage = loadable(() => import('./components/other/FeedbackPage'));
const UpdateSignUpPage = loadable(() => import('./components/other/UpdateSignUpPage'));
const TopicRecommendationPage = loadable(() => import('./components/other/TopicRecommendationPage'));

ReactDOM.render((
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/units" component={CharacterPage} />
      <Route path="/book" component={PDFPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/book-recommendations" component={BookPage} />
      <Route path="/feedback" component={FeedbackPage} />
      <Route path="/update-sign-up" component={UpdateSignUpPage} />
      <Route path="/topic-recommendation" component={TopicRecommendationPage} />
      <Route component={CharacterPage} />
    </Switch>
    <Footer />
  </BrowserRouter>), document.getElementById('main'));
