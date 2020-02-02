// Package dependencies
import loadable from '@loadable/component';
import React from 'react';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import 'typeface-roboto';
import ReactDOM from 'react-dom';
import {
  Route, Switch, BrowserRouter, Router,
} from 'react-router-dom';

const history = createBrowserHistory();
ReactGA.initialize('UA-157541239-1');
ReactGA.pageview(window.location.pathname + window.location.search);
history.listen((location) => {
  console.log('history');
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});


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
  <Router history={history}>
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
  </Router>), document.getElementById('app'));
