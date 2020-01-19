// Package dependencies
import React, { useState } from 'react';
import useInterval from 'react-useinterval';
import styled from 'styled-components';

/** ********************************************* */
// Component for displaying the home page
/** ********************************************* */
export default function DetailsSlides() {
  const [count, setCount] = useState(0);
  const picList = [];
  for (let i = 0; i < 5; i += 1) {
    picList.push(
      <SlideContainer count={count} value={i} key={i}>
        <PicContainer>
          <source srcSet={`Assets/Detail${i + 1}.webp`} type="image/webp" />
          <source srcSet={`Assets/Detail${i + 1}.jpg`} type="image/jpeg" />
          <Pic src={`Assets/Detail${i + 1}.jpg`} type="image/jpeg" />
        </PicContainer>
      </SlideContainer>,
    );
  }

  function counter() {
    if (count < picList.length - 1) {
      setCount(count + 1);
    } else {
      setCount(0);
    }
  }

  useInterval(counter, 5000);

  return (
    <>
      {picList}
    </>
  );
}


// Styling
const SlideContainer = styled.div`
  opacity: ${(props) => (props.count === props.value ? 1 : 0)};
  transition: opacity 1s;
  position: absolute;
  box-shadow: 0 0 0 #000;
  transform: translate3d(0, 0, 0);
`;

const PicContainer = styled.picture`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const Pic = styled.img`
  width: 100%;
`;
