// Package dependencies
import React from 'react';
import { Link } from 'react-router-dom';


// Data files
import booksByUnit from 'Data/booksByUnit.json';


// Component for displaying book pages
export default function BookPageLink(props) {
  const { unit, children } = props;
  const link = Object.prototype.hasOwnProperty.call(booksByUnit, unit)
    ? <Link to={`/book?${unit}`} target="_blank" style={{ color: 'inherit' }}>{children}</Link>
    : null;
  return (
    <>
      {link}
    </>
  );
}
