import React from 'react';

export default function Picture(props) {
  const { src, alt, style } = props;
  return (
    <>
      <source srcSet={`${src}.webp`} type="image/webp" />
      <source srcSet={`${src}.jpg`} type="image/jpeg" />
      <img alt={alt} src={`${src}.webp`} type="image/webp" style={style} />
    </>
  );
}
