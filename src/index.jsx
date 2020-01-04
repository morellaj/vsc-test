// Package dependencies
import  React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter, hashHistory} from 'react-router-dom'

// Component dependencies
import Home from './components/home/HomePage';
import PDFPage from './components/pdfs/PDFPage';
import AnnotationLayer from 'react-pdf/dist/Page/AnnotationLayer.css';



ReactDOM.render((
  <BrowserRouter>
      <Route exact path="/" component={Home}/>
      <Route path="/book" component={PDFPage}/>
  </BrowserRouter>), document.getElementById('main'));