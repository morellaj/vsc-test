// Package dependencies
import React from 'react';
import { Helmet } from 'react-helmet';


/** ********************************************* */
// Component for displaying icons
/** ********************************************* */
export default function Head(props) {
  const { title, description } = props;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}
