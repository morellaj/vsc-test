// Package dependencies
import React, { useState } from 'react';
import styled from 'styled-components';
import ReactGA from 'react-ga';

// Data dependencies
import colors from 'Colors';

// Component
export default function TeamMember(props) {
  const [hover, setHover] = useState(false);
  const { name, responsibilities, description } = props;
  const image = name.toLowerCase();
  const resp = responsibilities.map((item) => (
    <Responsibility key={item}>{item}</Responsibility>
  ));

  function handleMouseOver() {
    setHover(true);
    ReactGA.event({ category: 'about', action: `looked at ${name}` });
  }

  function handleMouseOut() {
    setHover(false);
  }

  return (
    <Container>
      <ImageContainer
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onFocus={handleMouseOver}
        onBlur={handleMouseOut}
      >
        <Picture hover={hover} top>
          <source srcSet={`Assets/${image}.webp`} type="image/webp" />
          <source srcSet={`Assets/${image}.jpg`} type="image/jpeg" />
          <Image
            alt={`${name}, a member of our team`}
            src={`Assets/${image}.jpg`}
            type="image/jpeg"
          />
        </Picture>
        <Picture>
          <source srcSet={`Assets/${image}2.webp`} type="image/webp" />
          <source srcSet={`Assets/${image}2.jpg`} type="image/jpeg" />
          <Image
            alt={`${name}, a member of our team`}
            src={`Assets/${image}2.jpg`}
            type="image/jpeg"
          />
        </Picture>
      </ImageContainer>
      <TextContainer>
        <UpperContainer>
          <Name>{name}</Name>
          <Responsibilities>{resp}</Responsibilities>
        </UpperContainer>
        <LowerContainer>
          {description}
        </LowerContainer>
      </TextContainer>
    </Container>
  );
}


// Styling
const Container = styled.div`
  display: flex;
  border-radius: 5px;
  background-color: white;
  padding: 40px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);

  @media(max-width: 700px) {
    padding: 20px;
  }

`;

const ImageContainer = styled.div`
  width: 140px;
  height: 220px;
  border-radius: 5px;
  margin-right: 30px;
  display: flex;
  justify-content: center;
  flex: 0 0 140px;
  overflow: hidden;
  position: relative;

  @media (max-width: 380px) {
    margin-right: 10px;
  }
`;

const Picture = styled.picture`
  height: 100%;
  align-items: center;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: ${(props) => (props.top ? '5' : '1')};
  display: ${(props) => (props.hover ? 'none' : 'flex')};
`;

const Image = styled.img`
  height: 100%;
`;

const TextContainer = styled.div`
  color: black;
`;

const UpperContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: flex-end;
  padding: 16px 0;
  border-bottom: 1px solid ${colors.LITS.color};

  @media(max-width: 480px) {
    padding: 16px 0 5px 0;
  }
`;

const Name = styled.div`
  color: black;
  font-weight: 500;
  font-size: 15px;
`;

const Responsibilities = styled.div`
  color: gray;
  font-size: 14px;
  position: absolute;
  right: 0;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const Responsibility = styled.div`
  color: gray;
`;

const LowerContainer = styled.div`
  padding-top: 16px;
  line-height: 1.5;
  font-size: 14px;

  @media (max-width: 480px) {
    padding-top: 5px;
    font-size: 12px;
    line-height: 1.3;
  }
`;
