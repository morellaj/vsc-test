// Package dependencies
import loadable from '@loadable/component';
import React from 'react';
import * as Sentry from '@sentry/browser';
import ReactGA from 'react-ga';
import 'typeface-roboto';
import ReactDOM from 'react-dom';
import {
  Route, Switch, BrowserRouter,
} from 'react-router-dom';
import Error from 'Error';

Sentry.init({ dsn: 'https://a247611c1b654f69aa4fed33d5789e5c@sentry.io/2274414' });
ReactGA.initialize('UA-157541239-1');

// Component dependencies
const HomePage = loadable(() => import('./components/home/HomePage'));
const CharacterPage = loadable(() => import('./components/curriculum/CharacterPage'));
const PDFPage = loadable(() => import('./components/pdfs/PDFPage'));
const AboutPage = loadable(() => import('./components/about/AboutPage'));
const BookPage = loadable(() => import('./components/books/BookPage'));
const FeedbackPage = loadable(() => import('./components/other/FeedbackPage'));
const UpdateSignUpPage = loadable(() => import('./components/other/UpdateSignUpPage'));
const TopicRecommendationPage = loadable(() => import('./components/other/TopicRecommendationPage'));
const ContactPage = loadable(() => import('./components/other/ContactPage'));
// const SitemapBuilder = loadable(() => import('./components/other/SitemapBuilder'));

ReactDOM.render((
  <Error>
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
  </Error>
), document.getElementById('app'));
