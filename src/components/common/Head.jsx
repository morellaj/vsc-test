// Package dependencies
import React from 'react';
import { Helmet } from 'react-helmet';

// File dependencies
import createSchema from './createSchema';

// Data dependencies
import { listOfMetaTags } from 'Constants';

// Component
export default function Head(props) {
  const { title, description, type, url } = props;
  const metaElements = [];

  listOfMetaTags.forEach(({ property, input }) => {
    const value = props[input];
    if (value !== undefined) {
      metaElements.push(<meta property={property} content={value} />);
    }
  });

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {metaElements}
      <script className="structured-data-list" type="application/ld+json">
        {`{
      "@context": "http://schema.org/",
      "@graph": ${JSON.stringify(createSchema(type, url, title, description))}
        }`}
      </script>
    </Helmet>
  );
}
