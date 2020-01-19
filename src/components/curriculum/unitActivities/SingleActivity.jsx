// Package dependencies
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Data dependencies
import { Link } from 'react-router-dom';
import colors from 'Colors';
import Icon from 'Icon';

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
      <ImageContainer>
        <ImageCover hover={hover}>
          <CoverText>
            Click to read
            <Icon icon="arrow" />
          </CoverText>
        </ImageCover>
        <Picture>
          <source srcSet={`Assets/${name}.webp`} type="image/webp" />
          <source srcSet={`Assets/${name}.jpg`} type="image/jpeg" />
          <Image
            displayImg={display}
            onLoad={() => (setDisplay(true))}
            src={`Assets/${name}.jpg`}
            type="image/jpeg"
          />
        </Picture>
      </ImageContainer>
      <Title>{title}</Title>
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
  box-shadow: 0 1px 1px black, 0 2px 5px rgba(0,0,0,0.6), 0 4px 10px rgba(0,0,0,0.2);
  background-color:white;

  @media (max-width: 1200px){
    width: 200px;
  };

`;


const ImageContainer = styled.div`
  height: 250px;
  overflow: hidden;
  position: relative;
  font-size: 20px;
  color: white;
  font-weight: 500;

  @media(max-width: 1200px){
    height: 200px;
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
  display: ${(props) => (props.hover ? 'flex' : 'none')};
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
  padding: 5px;
  background-color: ${colors.LITS.darkColor};

  @media(max-width:1200px){
    font-size: 18px;
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
