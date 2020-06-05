import React from 'react';

export default function Picture(props) {
  const { src, alt, containerStyle, imgStyle } = props;
  return (
    <picture style={containerStyle}>
      <source srcSet={`${src}.webp`} type="image/webp" />
      <source srcSet={`${src}.jpg`} type="image/jpeg" />
      <img alt={alt} src={`${src}.webp`} type="image/webp" style={imgStyle} />
    </picture>
  );
}
