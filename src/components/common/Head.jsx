// Package dependencies
import React from 'react';
import { Helmet } from 'react-helmet';

const baseSchema = [
  {
    '@type': 'Organization',
    '@id': 'https://learningisthesolution.com/#organization',
    name: 'Learning is the Solution',
    url: 'https://learningisthesolution.com/',
    sameAs: ['https://www.facebook.com/learningisthesolution', 'https://www.instagram.com/learning_is_the_solution/', 'https://www.pinterest.com/learningisthesolution/', 'https://twitter.com/LearnistheSol'],
    logo: {
      '@type': 'ImageObject',
      '@id': 'https://learningisthesolution.com/#logo',
      inLanguage: 'en-US',
      url: 'https://learningisthesolution.com/assets/logo-white-small.png',
      width: 170,
      height: 50,
      caption: 'Learning is the Solution',
    },
    image: {
      '@id': 'https://learningisthesolution.com/#logo',
    },
  }, {
    '@type': 'WebSite',
    '@id': 'https://learningisthesolution.com/#website',
    url: 'https://learningisthesolution.com/',
    name: 'Learning is the Solution',
    inLanguage: 'en-US',
    description: "Free Online Kids' Books That Teach Important Lessons",
    publisher: {
      '@id': 'https://learningisthesolution.com/#organization',
    },
  }, {
    '@type': ['WebPage'],
    '@id': 'https://learningisthesolution.com/#webpage',
    url: 'https://learningisthesolution.com/',
    name: "Free Online Kids' Books That Teach Important Lessons",
    isPartOf: {
      '@id': 'https://learningisthesolution.com/#website',
    },
    inLanguage: 'en-US',
    about: {
      '@id': 'https://learningisthesolution.com/#organization',
    },
    description: 'Read short stories online for kids from 4 to 9 years old.  Kids get to choose what happens in the story, and develop social and emotional skills along the way!',
  },

];


/** ********************************************* */
// Component for displaying icons
/** ********************************************* */
export default function Head(props) {
  const {
    title, description, image, height, width, type, url, author, tags, schema,
  } = props;

  const image1 = image ? <meta property="og:image" content={image} /> : null;
  const image2 = image ? <meta property="og:image:secure_url" content={image} /> : null;
  const twImage = image ? <meta property="twitter:image" content={image} /> : null;
  const imgHeight = height ? <meta property="og:image:height" content={height} /> : null;
  const imgWidth = height ? <meta property="og:image:width" content={width} /> : null;
  const ogTitle = title ? <meta property="og:title" content={title} /> : null;
  const twTitle = title ? <meta property="twitter:title" content={title} /> : null;
  const ogType = type ? <meta property="og:type" content={type} /> : null;
  const ogDescription = description ? <meta property="og:description" content={description} /> : null;
  const twDescription = description ? <meta property="twitter: description" content={description} /> : null;
  const ogAuthor = author ? <meta property="og:book:author" content={author} /> : null;
  const ogUrl = url ? <meta property="og:url" content={url} /> : null;
  const ogTags = tags ? <meta property="og:book:tag" content={tags} /> : null;
  const headSchema = schema ? <script className="structured-data-list" type="application/ld+json">{JSON.stringifyschema}</script> : null;

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
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://learningisthesolution.com/#organization",
              name: "Learning is the Solution",
              url: "https://learningisthesolution.com/",
              sameAs: ["https://www.facebook.com/learningisthesolution", "https://www.instagram.com/learning_is_the_solution/", "https://www.pinterest.com/learningisthesolution/", "https://twitter.com/LearnistheSol"],
              logo: {
                "@type": "ImageObject",
                "@id": "https://learningisthesolution.com/#logo",
                inLanguage: "en-US",
                url: "https://learningisthesolution.com/assets/logo-white-small.png",
                width: 170,
                height: 50,
                caption: "Learning is the Solution",
              },
              image: {
                "@id": "https://learningisthesolution.com/#logo",
              },
            }, {
              "@type": "WebSite",
              "@id": "https://learningisthesolution.com/#website",
              url: "https://learningisthesolution.com/",
              name: "Learning is the Solution",
              inLanguage: "en-US",
              description: "Free Online Kids" Books That Teach Important Lessons",
              publisher: {
                "@id": "https://learningisthesolution.com/#organization",
              },
            }, {
              "@type": ["WebPage"],
              "@id": "https://learningisthesolution.com/#webpage",
              url: "https://learningisthesolution.com/",
              name: "Free Online Kids" Books That Teach Important Lessons",
              isPartOf: {
                "@id": "https://learningisthesolution.com/#website",
              },
              inLanguage: "en-US",
              about: {
                "@id": "https://learningisthesolution.com/#organization",
              },
              description: "Read short stories online for kids from 4 to 9 years old.  Kids get to choose what happens in the story, and develop social and emotional skills along the way!",
            },
          ],
        }`}
      </script>
    </Helmet>
  );
}
