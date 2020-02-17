// Package dependencies
import React, { useState, useEffect } from 'react';
import useInterval from 'react-useinterval';
import styled from 'styled-components';
import ReactTimeout from 'react-timeout';

// Data dependencies
import { introPicCount } from 'Constants';

/** ********************************************* */
// Component for displaying the home page
/** ********************************************* */
function IntroSlides() {
  const [count, setCount] = useState(0);
  const [mode, setMode] = useState(0);
  const picList = [];
  for (let i = 0; i < introPicCount; i += 1) {
    picList.push(
      <SlideContainer value={i} count={count} mode={mode} key={i}>
        <PicContainer>
          <source srcSet={`Assets/Home${i + 1}.webp`} type="image/webp" />
          <source srcSet={`Assets/Home${i + 1}.jpg`} type="image/jpeg" />
          <Pic
            alt="pages from online short stories"
            src={`Assets/Home${i + 1}.jpg`}
            type="image/jpeg"
          />
        </PicContainer>
      </SlideContainer>,
    );
  }


  function start() {
    setMode(1);
  }

  function counter() {
    if (mode < 3) {
      setMode(mode + 1);
    } else {
      setMode(0);
    }
    if (count < picList.length - 1) {
      setCount(count + 1);
    } else {
      setCount(0);
    }
  }

  useEffect(() => {
    setTimeout(start, 1);
  }, []);

  useInterval(counter, 10000);


  return (
    <>
      {picList}
    </>
  );
}

export default ReactTimeout(IntroSlides);

// Styling
const SlideContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  opacity: ${(props) => (props.count === props.value ? 1 : 0)};
  transition: opacity 1s, width 10s, transform 10s;
  transition-timing-function: linear;
  position: absolute;
  bottom: 0;
  box-shadow: 0 0 0 #000;
  transform: translate3d(0, 0, 0);

  transform: ${(props) => (
    props.mode === 0 || props.mode === 1 ? 'translateX(-20px)' : 'translateX(20px)')};

  width: ${(props) => (
    props.mode === 1 || props.mode === 2 ? `${118.6 * 1}%` : `${118.6 * 1.1}%`)};

  @media (min-width: 1280px){
    width: ${(props) => (
    props.mode === 1 || props.mode === 2 ? `${1519 * 1}px` : `${1519 * 1.1}px`)}};

  @media (min-width: 1532px){
    width: ${(props) => (
    props.mode === 1 || props.mode === 2 ? `${105 * 1}%` : `${105 * 1.1}%`)}};
`;

const PicContainer = styled.picture`
  display: flex;
  align-items: flex-end;
  width: 100%;
  justify-content: center;
`;

const Pic = styled.img`
  width: 100%;
`;
