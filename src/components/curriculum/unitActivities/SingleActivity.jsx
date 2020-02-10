// Package dependencies
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Data dependencies
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

/** ********************************************* */
// Component for displaying the home page
/** ********************************************* */
export default function Topic(props) {
  const [display, setDisplay] = useState(false);
  const [hover, setHover] = useState(false);
  const { title } = props;

  useEffect(() => {
    setDisplay(false);
  }, [title]);

  function handleMouseOver() {
    setHover(true);
  }

  function handleMouseOut() {
    setHover(false);
  }

  const name = title.toLowerCase().replace(/[?]/g, '').replace(/\s+/g, '-');

  return (
    <StyledLink
      to={`/book?${name}`}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onFocus={handleMouseOver}
      onBlur={handleMouseOut}
    >
      <ImageCover hover={hover}>
        <CoverText>
            Click to read
          <FontAwesomeIcon icon={faArrowRight} style={{ margin: '0 5px' }} />
        </CoverText>
      </ImageCover>
      <ImageContainer>
        <Picture>
          <source srcSet={`Assets/${name}.webp`} type="image/webp" />
          <source srcSet={`Assets/${name}.jpg`} type="image/jpeg" />
          <Image
            show={display}
            alt={`book - ${name}`}
            onLoad={() => (setDisplay(true))}
            src={`Assets/${name}.jpg`}
            type="image/jpeg"
          />
        </Picture>
      </ImageContainer>
    </StyledLink>
  );
}


// Styling
const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 10px;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  width: 250px;
  background-color:white;

  @media (max-width: 1000px){
    width: 200px;
  };

  @media(max-width: 460px){
    width: 250px;
  };
`;


const ImageContainer = styled.div`
  height: 250px;
  overflow: hidden;
  position: relative;

  @media(max-width: 1000px){
    height: 200px;
  };

  @media(max-width: 460px){
    height: 250px;
  };
`;

const ImageCover = styled.div`
  position: absolute;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  z-index: 5;
  font-size: 20px;
  color: white;
  font-weight: 500;
  transition: background-color 1s;
  background-color: rgba(0, 94, 167, .7);
  display: ${(props) => (props.hover ? 'flex' : 'none')};
`;

const CoverText = styled.div`
  
`;
const Image = styled.img`
  width: 100%;
  position:absolute;
  display: ${(props) => (props.show ? 'block' : 'none')}
`;

const Picture = styled.picture`
  display: flex;
  height: 100%;
  align-items: center;
  position: relative;
`;
