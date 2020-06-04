// Package dependencies
import React, { Suspense, lazy } from 'react';
import * as Sentry from '@sentry/browser';
import ReactGA from 'react-ga';
import 'typeface-roboto';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { ThemeProvider } from 'styled-components';
import { IconContext } from 'react-icons';
import theme from './theme';

// File dependencies
import Error from 'Error';
import rootReducer from './redux/reducers';
import GlobalStyle from './components/common/GlobalStyle';
const HomePage = lazy(() => import('./components/home/HomePage'));
const CharacterPage = lazy(() => import('./components/curriculum/CharacterPage'));
const PDFPage = lazy(() => import('./components/pdfs/PDFPage'));
const AboutPage = lazy(() => import('./components/about/AboutPage'));
const BookPage = lazy(() => import('./components/books/BookPage'));
const FeedbackPage = lazy(() => import('./components/other/FeedbackPage'));
const UpdateSignUpPage = lazy(() => import('./components/other/UpdateSignUpPage'));
const TopicRecommendationPage = lazy(() => import('./components/other/TopicRecommendationPage'));
const ContactPage = lazy(() => import('./components/other/ContactPage'));
const Disclosure = lazy(() => import('./components/other/Disclosure'));
// const SitemapBuilder from './components/other/SitemapBuilder'));

const store = createStore(rootReducer);
if (process.env.NODE_ENV === 'production') {
  Sentry.init({ dsn: 'https://a247611c1b654f69aa4fed33d5789e5c@sentry.io/2274414' });
}
ReactGA.initialize('UA-157541239-1');


ReactDOM.render((
  <Error>
    <ThemeProvider theme={theme}>
      <Suspense fallback={<div />}>
        <Provider store={store}>
          <BrowserRouter>
            <GlobalStyle />
            <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
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
                <Route path="/disclosure" component={Disclosure} />
              </Switch>
            </IconContext.Provider>
          </BrowserRouter>
        </Provider>
      </Suspense>
    </ThemeProvider>
  </Error>
), document.getElementById('app'));
