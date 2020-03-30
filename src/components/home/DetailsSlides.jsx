// Package dependencies
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { flexCenter } from 'Styles';

// Component
export default function DetailsSlides() {
  const [count, setCount] = useState(0);
  const picList = [];
  for (let i = 0; i < 5; i += 1) {
    picList.push(
      <SlideContainer count={count} value={i} key={i}>
        <source srcSet={`Assets/Detail${i + 1}.webp`} type="image/webp" />
        <source srcSet={`Assets/Detail${i + 1}.jpg`} type="image/jpeg" />
        <Pic
          alt="pages from online short stories"
          src={`Assets/Detail${i + 1}.jpg`}
          type="image/jpeg"
        />
      </SlideContainer>,
    );
  }

  useEffect(() => {
    const id = setInterval(() => setCount((c) => (c < picList.length - 1 ? c + 1 : 0)), 5000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <>
      {picList}
    </>
  );
}


// Styling
const SlideContainer = styled.picture`
  ${flexCenter};
  opacity: ${(props) => (props.count === props.value ? 1 : 0)};
  transition: opacity 1s;
  position: absolute;
  box-shadow: 0 0 0 #000;
  transform: translate3d(0, 0, 0);
`;

const Pic = styled.img`
  width: 100%;
`;
