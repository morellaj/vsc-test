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

// Sentry.init({ dsn: 'https://a247611c1b654f69aa4fed33d5789e5c@sentry.io/2274414' });
ReactGA.initialize('UA-157541239-1');

ReactDOM.render((
  <Error>
    <Suspense fallback={<div />}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={CharacterPage} />
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
