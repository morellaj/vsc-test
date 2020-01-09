// Package dependencies
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


// Component for displaying an individual book
export default function BookImage(props) {
  const { images, images: { thumbnail, smallThumbnail } } = props;
  let image;
  if (!images) {
    image = <ImageMissing><div>No Image Available</div></ImageMissing>;
  } else if (thumbnail) {
    image = <Image src={thumbnail.replace('http://', 'https://')} />;
  } else if (smallThumbnail) {
    image = <Image src={smallThumbnail.replace('http://', 'https://')} />;
  }
  return (
    <Container>
      {image}
    </Container>
  );
}

// Props validation
BookImage.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  thumbnail: PropTypes.string,
  smallThumbnail: PropTypes.string,
};

BookImage.defaultValues = {
  thumbnail: undefined,
  smallThumbNail: undefined,
};


// Styling
const Container = styled.div`
  display: flex;
  justify-content: center;
  flex: 0 0 170px;
  border-radius: 5px;
  border: 1px solid lightgray;
  width: 170px;
  height: 200px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const ImageMissing = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  font-size: 25px;
`;
