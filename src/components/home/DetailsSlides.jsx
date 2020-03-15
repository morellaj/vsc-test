// Package dependencies
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Component
export default function DetailsSlides() {
  const [count, setCount] = useState(0);
  const picList = [];
  for (let i = 0; i < 5; i += 1) {
    picList.push(
      <SlideContainer count={count} value={i} key={i}>
        <PicContainer>
          <source srcSet={`Assets/Detail${i + 1}.webp`} type="image/webp" />
          <source srcSet={`Assets/Detail${i + 1}.jpg`} type="image/jpeg" />
          <Pic
            alt="pages from online short stories"
            src={`Assets/Detail${i + 1}.jpg`}
            type="image/jpeg"
          />
        </PicContainer>
      </SlideContainer>,
    );
  }

  useEffect(() => {
    function counter() {
      if (count < picList.length - 1) {
        setCount((c) => c + 1);
      } else {
        setCount(0);
      }
    }

    const id = setInterval(counter, 5000);

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
const SlideContainer = styled.div`
  opacity: ${(props) => (props.count === props.value ? 1 : 0)};
  transition: opacity 1s;
  position: absolute;
  box-shadow: 0 0 0 #000;
  transform: translate3d(0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PicContainer = styled.picture`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: flex-end;
`;

const Pic = styled.img`
  width: 100%;
`;
