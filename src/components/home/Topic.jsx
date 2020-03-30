// Package dependencies
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Data dependencies
import { flexCenter, shadow3, themeLITS } from 'Styles';

/** ********************************************* */
// Component for displaying the home page
/** ********************************************* */
export default function Topic({ to, enabled, title, imgStyle, unit }) {
  const [hover, setHover] = useState(false);

  return (
    <Container
      as={enabled ? Link : 'div'}
      to={to}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
    >
      <NotFinished enabled={enabled}>
        <NotAvailable>Not Available Yet</NotAvailable>
      </NotFinished>
      <ImageContainer>
        <ImageCover enabled={enabled} hover={hover}>
          <CoverTitle>
            Click to see books
            <FaArrowRight style={{ margin: '0 5px' }} />
          </CoverTitle>
        </ImageCover>
        <Picture>
          <source srcSet={`./assets/${unit}.webp`} type="image/webp" />
          <source srcSet={`./assets/${unit}.jpg`} type="image/jpeg" />
          <Image alt={`Free online books about ${unit}`} src={`./assets/${unit}.jpg`} type="image/jpeg" style={imgStyle} />
        </Picture>
      </ImageContainer>
      <Title>{title}</Title>
    </Container>
  );
}


// Styling
const Container = styled.div`
  ${shadow3};
  margin: 1.5em 1em;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  padding: 0;
  width: 12.5em;
  height: 12.5em;
  background-color:white;
`;

const NotFinished = styled.div`
  ${flexCenter};
  display: ${(props) => (props.enabled ? 'none' : 'flex')};
  position: absolute;
  height: 100%;
  z-index: 5;
  width: 100%;
  background-color: rgba(0, 0, 0, .5);
`;

const NotAvailable = styled.div`
  font-size: .8em;
  border-radius: 5px;
  color: white;
  font-weight: 900;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 2px 10px;
  ;
`;


const ImageContainer = styled.div`
  height: 11em;
  overflow: hidden;
  position: relative;
  font-size: 1em;
  color: white;
  font-weight: 500;
`;

const ImageCover = styled.div`
  ${flexCenter};
  display: ${(props) => (props.enabled && props.hover ? 'flex' : 'none')};
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 5;
  transition: background-color 1s;
  background-color: rgba(0, 94, 167, .7);
`;

const CoverTitle = styled.p`
  ${flexCenter};
`;

const Image = styled.img`
  width: 100%;
  position:absolute;
`;

const Title = styled.h2`
  ${themeLITS};
  font-size: 1em;
  font-weight: 500;
  text-align: center;
  height: 1.5em;
`;

const Picture = styled.picture`
  ${flexCenter};
  height: 100%;
  position: relative;
`;
