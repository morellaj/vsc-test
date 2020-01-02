// Package dependencies
import  React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter, hashHistory} from 'react-router-dom'

// Component dependencies
import Home from './components/home/HomePage';



ReactDOM.render((
  <BrowserRouter>
      <Route exact path="/" component={Home}/>
  </BrowserRouter>), document.getElementById('main'));