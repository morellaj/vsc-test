// Package dependencies
import React from 'react';
import styled from 'styled-components';


// Component for displaying an individual book
export default function Book(props) {
  const images = props.book.imageLinks;
  var image;
  if(!images){
    image = <ImageMissing><div>No Image Available</div></ImageMissing>;
  }
  else if(images.thumbnail){
    image = <Image src={images.thumbnail.replace('http://', 'https://')}/>;
  }
  else if(images.smallThumbNail){
    image = <Image src={images.smallThumbnail.replace('http://', 'https://')}/>;
  }
  return (
    <Container>
      {image}
    </Container>
  );
}


// Styling
const Container = styled.div`
  display: flex;
  justify-content: center;
  flex: 0 0 170px;
  border-radius: 5px;
  border: 1px solid lightgray;
  width: 170px;
  height: 200px;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

const ImageMissing = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  font-size: 25px;
`