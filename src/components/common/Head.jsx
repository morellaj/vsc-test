// Package dependencies
import React from 'react';
import { Helmet } from 'react-helmet';


/** ********************************************* */
// Component for displaying icons
/** ********************************************* */
export default function Head(props) {
  const {
    title, description, image, height, width,
  } = props;

  const image1 = image ? <meta property="og:image" content={image} /> : null;
  const image2 = image ? <meta property="og:image:secure_url" content={image} /> : null;
  const imgHeight = height ? <meta property="og:image:height" content={height} /> : null;
  const imgWidth = height ? <meta property="og:image:width" content={width} /> : null;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {image1}
      {image2}
      {imgHeight}
      {imgWidth}
    </Helmet>
  );
}
