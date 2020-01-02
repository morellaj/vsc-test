// Package dependencies
import React from 'react';
import {Fade} from 'react-slideshow-image';
import styled from 'styled-components';

/************************************************/
// Component for displaying the home page
/************************************************/
export default function Slides(props){ 
  const picList = props.pictureList.map((pic, i) => {
    return (
      <SlideContainer key={i}>
        <PicContainer>
          <Pic src={'../../assets/' + props.type + pic + '.png'}/>
        </PicContainer>
      </SlideContainer>
    )
  })
  
  return (
    <Fade {...props.fadeProperties}>
      {picList}
    </Fade>
  );
}

// Styling
const SlideContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

const PicContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`

const Pic = styled.img`
  width: 100%;
  max-width: 1100px;
`

