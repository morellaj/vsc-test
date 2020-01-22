// Package dependencies
import loadable from '@loadable/component';
import React from 'react';
import 'typeface-roboto';
import ReactDOM from 'react-dom';


import {
  Route, Switch, BrowserRouter,
} from 'react-router-dom';


// Component dependencies
const HomePage = loadable(() => import('./components/home/HomePage'));
const Footer = loadable(() => import('./components/common/Footer'));
const CharacterPage = loadable(() => import('./components/curriculum/CharacterPage'));
const PDFPage = loadable(() => import('./components/pdfs/PDFPage'));
const AboutPage = loadable(() => import('./components/about/AboutPage'));
const BookPage = loadable(() => import('./components/books/BookPage'));
const FeedbackPage = loadable(() => import('./components/other/FeedbackPage'));
const UpdateSignUpPage = loadable(() => import('./components/other/UpdateSignUpPage'));
const TopicRecommendationPage = loadable(() => import('./components/other/TopicRecommendationPage'));
const ContactPage = loadable(() => import('./components/other/ContactPage'));

ReactDOM.render((
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/units" component={CharacterPage} />
      <Route path="/book" component={PDFPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/book-recommendations" component={BookPage} />
      <Route path="/feedback" component={FeedbackPage} />
      <Route path="/update-sign-up" component={UpdateSignUpPage} />
      <Route path="/topic-recommendation" component={TopicRecommendationPage} />
      <Route path="/contact" component={ContactPage} />
    </Switch>
    <Footer />
  </BrowserRouter>), document.getElementById('main'));
