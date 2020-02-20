// Package dependencies
import React from 'react';
import { Helmet } from 'react-helmet';

// Data dependencies
import { HomePage } from 'Data/pageHeadInfo.json';
import { baseUrl } from 'Constants';

// Component
export default function Head(props) {
  const {
    title, description, image, height, width, type, url, author, tags, schema,
  } = props;

  const image1 = image ? <meta property="og:image" content={image} /> : null;
  const image2 = image ? <meta property="og:image:secure_url" content={image} /> : null;
  const twImage = image ? <meta property="twitter:image" content={image} /> : null;
  const imgHeight = height ? <meta property="og:image:height" content={height} /> : null;
  const imgWidth = width ? <meta property="og:image:width" content={width} /> : null;
  const ogTitle = title ? <meta property="og:title" content={title} /> : null;
  const twTitle = title ? <meta property="twitter:title" content={title} /> : null;
  const ogType = type ? <meta property="og:type" content={type} /> : null;
  const ogDescription = description ? <meta property="og:description" content={description} /> : null;
  const twDescription = description ? <meta property="twitter: description" content={description} /> : null;
  const ogAuthor = author ? <meta property="og:book:author" content={author} /> : null;
  const ogUrl = url ? <meta property="og:url" content={url} /> : null;
  const ogTags = tags ? <meta property="og:book:tag" content={tags} /> : null;

  const baseSchema = [
    {
      "@type": "Organization",
      "@id": `${baseUrl}#organization`,
      "name": "Learning is the Solution",
      "url": baseUrl,
      "sameAs": ["https://www.facebook.com/learningisthesolution", "https://www.instagram.com/learning_is_the_solution/", "https://www.pinterest.com/learningisthesolution/", "https://twitter.com/LearnistheSol"],
      "logo": {
        "@type": "ImageObject",
        "@id": `${baseUrl}#logo`,
        "inLanguage": "en-US",
        "url": `${baseUrl}assets/logo-white-small.png`,
        "width": "170",
        "height": "50",
        "caption": "Learning is the Solution"
      },
      "image": {
        "@id": `${baseUrl}#logo`
      }
    }, {
      "@type": "WebSite",
      "@id": `${baseUrl}#website`,
      "url": baseUrl,
      "name": "Learning is the Solution",
      "inLanguage": "en-US",
      "description": HomePage.title,
      "publisher": {
        "@id": `${baseUrl}#organization`
      }
    }
  ];

  if (schema) {
    for (let i = 0; i < schema.length; i += 1) {
      baseSchema.push(schema[i]);
    }
  }


  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      {image1}
      {image2}
      {twImage}
      {imgHeight}
      {imgWidth}
      {ogTitle}
      {twTitle}
      {ogType}
      {ogDescription}
      {twDescription}
      {ogAuthor}
      {ogUrl}
      {ogTags}
      <script className="structured-data-list" type="application/ld+json">
        {`{
      "@context": "http://schema.org/",
      "@graph": ${JSON.stringify(baseSchema)}
        }`}

      </script>
    </Helmet>
  );
}
