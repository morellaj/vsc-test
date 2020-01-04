// Package dependencies
import React, {Fragment} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


// Data files
import {booksByUnit} from '../../master.json';


// Component for displaying book pages
export default function BookPageLink(props) {
  const link = booksByUnit.hasOwnProperty(props.unit)?
      <Link to={"/book?" + props.unit} target='_blank' style={{color:'inherit'}}>{props.children}</Link>:
      null;
  return(
  <Fragment>
    {link}
  </Fragment>
  )
}
