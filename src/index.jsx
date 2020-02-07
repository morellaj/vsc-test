// Package dependencies
import React, { Suspense, lazy } from 'react';
import * as Sentry from '@sentry/browser';
import ReactGA from 'react-ga';
import 'typeface-roboto';
import ReactDOM from 'react-dom';
import {
  Route, Switch, BrowserRouter,
} from 'react-router-dom';
import Error from 'Error';
// test
// Component dependencies

const HomePage = lazy(() => import('./components/home/HomePage'));
const CharacterPage = lazy(() => import('./components/curriculum/CharacterPage'));
const PDFPage = lazy(() => import('./components/pdfs/PDFPage'));
const AboutPage = lazy(() => import('./components/about/AboutPage'));
const BookPage = lazy(() => import('./components/books/BookPage'));
const FeedbackPage = lazy(() => import('./components/other/FeedbackPage'));
const UpdateSignUpPage = lazy(() => import('./components/other/UpdateSignUpPage'));
const TopicRecommendationPage = lazy(() => import('./components/other/TopicRecommendationPage'));
const ContactPage = lazy(() => import('./components/other/ContactPage'));
// const SitemapBuilder from './components/other/SitemapBuilder'));

Sentry.init({ dsn: 'https://a247611c1b654f69aa4fed33d5789e5c@sentry.io/2274414' });
ReactGA.initialize('UA-157541239-1');


ReactDOM.render((
  <Error>
    <Suspense fallback={<div>Loading...</div>}>
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
      </BrowserRouter>
    </Suspense>
  </Error>
), document.getElementById('app'));


/*
const HomePage = loadable(() => import('./components/home/HomePage'));
const CharacterPage = loadable(() => import('./components/curriculum/CharacterPage'));
const PDFPage = loadable(() => import('./components/pdfs/PDFPage'));
const AboutPage = loadable(() => import('./components/about/AboutPage'));
const BookPage = loadable(() => import('./components/books/BookPage'));
const FeedbackPage = loadable(() => import('./components/other/FeedbackPage'));
const UpdateSignUpPage = loadable(() => import('./components/other/UpdateSignUpPage'));
const TopicRecommendationPage = loadable(() => import('./components/other/TopicRecommendationPage'));
const ContactPage = loadable(() => import('./components/other/ContactPage'));
*/

/*
import HomePage from './components/home/HomePage';
import CharacterPage from './components/curriculum/CharacterPage';
import PDFPage from './components/pdfs/PDFPage';
import AboutPage from './components/about/AboutPage';
import BookPage from './components/books/BookPage';
import FeedbackPage from './components/other/FeedbackPage';
import UpdateSignUpPage from './components/other/UpdateSignUpPage';
import TopicRecommendationPage from './components/other/TopicRecommendationPage';
import ContactPage from './components/other/ContactPage';
*/
