// Package dependencies
import React, { useState, useEffect } from 'react';
import useInterval from 'react-useinterval';
import styled from 'styled-components';

/** ********************************************* */
// Component for displaying the home page
/** ********************************************* */
function IntroSlides(props) {
  const [count, setCount] = useState(0);
  const { pictureList } = props;
  const picList = pictureList.map((pic, i) => (
    <SlideContainer
      iFactor={pic.iFactor}
      fFactor={pic.fFactor}
      iBottom={pic.iBottom}
      fBottom={pic.fBottom}
      iLeft={pic.iLeft}
      fLeft={pic.fLeft}
      iWidth={pic.iWidth}
      fWidth={pic.fWidth}
      value={i}
      count={count}
      mode={mode}
      key={pic.id}
    >
      <PicContainer>
        <Pic src={pic.src} />
      </PicContainer>
    </SlideContainer>
  ));

  function start() {
    setMode(true);
  }

  function counter() {
    setMode(!mode);
    if (count < picList.length - 1) {
      setCount(count + 1);
    } else {
      setCount(0);
    }
  }

  useEffect(() => {
    setTimeout(start, 1);
  }, []);

  useInterval(counter, 5000);


  return (
    <>
      {picList}
    </>
  );
}

export default ReactTimeout(IntroSlides);

// Props validation


// Styling
const SlideContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  opacity: ${(props) => (props.count === props.value ? 1 : 0)};
  transition: opacity 1s, width 20s;
  position: absolute;
  bottom: 0;
  box-shadow: 0 0 0 #000;
  transform: translate3d(0, 0, 0);

  width: ${(props) => (
    props.mode ? `${118.6 * props.iFactor}%` : `${118.6 * props.fFactor}%`)};


  @media (min-width: 1280px){
    width: ${(props) => (
    props.mode ? `${1519 * props.iFactor}px` : `${1519 * props.fFactor}px`)}};

  @media (min-width: 1532px){
    width: ${(props) => (
    props.mode ? `${100 * props.iFactor}%` : `${100 * props.fFactor}%`)}};
`;

const PicContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const Pic = styled.img`
  width: 100%;
  /*
  max-width: 1100px;
  */
`;
