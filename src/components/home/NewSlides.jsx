// Package dependencies
import React, { useState, useEffect } from 'react';
import useInterval from 'react-useinterval';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ReactTimeout from 'react-timeout';

/** ********************************************* */
// Component for displaying the home page
/** ********************************************* */
function Slides(props) {
  const [count, setCount] = useState(-2);
  const { pictureList } = props;
  const picList = pictureList.map((pic, i) => (
    <SlideContainer
      iBottom={pic.iBottom}
      fBottom={pic.fBottom}
      iLeft={pic.iLeft}
      fLeft={pic.fLeft}
      iWidth={pic.iWidth}
      fWidth={pic.fWidth}
      value={i}
      count={count}
      key={pic.id}
    >
      <PicContainer>
        <Pic src={pic.src} />
      </PicContainer>
    </SlideContainer>
  ));

  function start() {
    console.log('start');
    setCount(0);
  }

  function counter() {

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

export default ReactTimeout(Slides);

// Props validation


// Styling
const SlideContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  opacity: ${(props) => (props.count === props.value ? 1 : 0)};
  transition: opacity 1s, left 20s, bottom 20s, width 20s;
  position: absolute;
  bottom: 0;
  width: ${(props) => (props.count < props.value - 1 ? props.iWidth : props.fWidth)};
  left: ${(props) => (props.count < props.value - 1 ? props.iLeft : props.fLeft)};
  bottom: ${(props) => (props.count < props.value - 1 ? props.iBottom : props.fBottom)};
  box-shadow: 0 0 0 #000;
  transform: translate3d(0, 0, 0);
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
