// Package dependencies
import React from 'react';
import { Helmet } from 'react-helmet';


/** ********************************************* */
// Component for displaying icons
/** ********************************************* */
export default function Head(props) {
  const {
    title, description, image, height, width, type, url, author, tags,
  } = props;

  const image1 = image ? <meta property="og:image" content={image} /> : null;
  const image2 = image ? <meta property="og:image:secure_url" content={image} /> : null;
  const imgHeight = height ? <meta property="og:image:height" content={height} /> : null;
  const imgWidth = height ? <meta property="og:image:width" content={width} /> : null;
  const ogTitle = title ? <meta property="og:title" content={title} /> : null;
  const ogType = type ? <meta property="og:type" content={type} /> : null;
  const ogDescription = description ? <meta property="og:description" content={description} /> : null;
  const ogAuthor = author ? <meta property="og:book:author" content={author} /> : null;
  const ogUrl = url ? <meta property="og:url" content={url} /> : null;
  const ogTags = tags ? <meta property="og:book:tag" content={tags} /> : null;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="fb:app_id" content="2863168573746483" />
      {image1}
      {image2}
      {imgHeight}
      {imgWidth}
      {ogTitle}
      {ogType}
      {ogDescription}
      {ogAuthor}
      {ogUrl}
      {ogTags}
    </Helmet>
  );
}
