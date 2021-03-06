// Package dependencies
import React, { useState } from 'react';
import styled from 'styled-components';

// Data dependencies
import colors from 'Colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

/** ********************************************* */
// Component for displaying the home page
/** ********************************************* */
export default function Topic(props) {
  const [hover, setHover] = useState(false);
  const { done, text, imgStyle } = props;
  const unit = text.replace(/\s+/g, '-').toLowerCase();

  function handleMouseOver() {
    setHover(true);
  }

  function handleMouseOut() {
    setHover(false);
  }

  return (
    <Container
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onFocus={handleMouseOver}
      onBlur={handleMouseOut}
    >
      <NotFinished done={done}>
        <NotAvailable>Not Available Yet</NotAvailable>
      </NotFinished>
      <ImageContainer>
        <ImageCover done={done} hover={hover}>
          <CoverText>
            Click to see books
            <FontAwesomeIcon icon={faArrowRight} style={{ margin: '0 5px' }} />
          </CoverText>
        </ImageCover>
        <Picture>
          <source srcSet={`./assets/${unit}.webp`} type="image/webp" />
          <source srcSet={`./assets/${unit}.jpg`} type="image/jpeg" />
          <Image alt={`Free online books about ${unit}`} src={`./assets/${unit}.jpg`} type="image/jpeg" style={imgStyle} />
        </Picture>
      </ImageContainer>
      <Title>{text}</Title>
    </Container>
  );
}


// Styling
const Container = styled.div`
  margin: 30px 20px;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  width: 250px;
  height: 250px;
  box-shadow: 0 1px 1px black, 0 2px 5px rgba(0,0,0,0.6), 0 4px 10px rgba(0,0,0,0.2);
  background-color:white;

  @media (max-width: 1000px){
    width: 150px;
    height: 150px;
    margin: 20px 10px;
  };

  @media (max-width: 500px){
    width: 100px;
    height: 100px;
    margin: 15px 8px;
  };
`;

const NotFinished = styled.div`
  position: absolute;
  height: 100%;
  z-index: 5;
  width: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: ${(props) => (props.done ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;
`;

const NotAvailable = styled.div`
  font-size: 14px;
  color: white;
  font-weight: 900;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 2px 10px;
  border-radius: 5px;

  @media(max-width: 1000px){
    font-size: 12px;
  }

  @media(max-width: 500px){
    font-size: 10px;
  }
`;


const ImageContainer = styled.div`
  height: 220px;
  overflow: hidden;
  position: relative;
  font-size: 20px;
  color: white;
  font-weight: 500;

  @media(max-width: 1000px){
    height: 130px;
    font-size: 14px;
  };

  @media(max-width: 500px){
    height: 85px;
    font-size: 12px;
  };
`;

const ImageCover = styled.div`
  position: absolute;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  z-index: 5;
  transition: background-color 1s;
  background-color: rgba(0, 94, 167, .7);
  display: ${(props) => (props.done && props.hover ? 'flex' : 'none')};
`;

const CoverText = styled.div`
  
`;
const Image = styled.img`
  width: 100%;
  position:absolute;
`;

const Title = styled.div`
  font-size: 20px;
  color: white;
  font-weight: 500;
  text-align: center;
  height: 30px;
  background-color: ${colors.LITS.darkColor};

  @media(max-width:1000px){
    font-size: 14px;
  };

  @media(max-width:500px){
    font-size: 10px;
  };
`;

const Picture = styled.picture`
  display: flex;
  height: 100%;
  align-items: center;
  position: relative;
`;
