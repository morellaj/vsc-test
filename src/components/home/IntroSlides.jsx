// Package dependencies
import React, { useReducer, useEffect } from 'react';
import styled from 'styled-components';

// Data dependencies
import { introPicCount } from 'Constants';

function reducer(state, action) {
  let update;
  if (action === 'start') {
    update = { ...state, mode: 1 };
  } else if (action === 'interval') {
    const { count, mode } = state;
    const newMode = mode < 3 ? mode + 1 : 0;
    const newCount = count < introPicCount - 1 ? count + 1 : 0;
    update = { count: newCount, mode: newMode };
  }
  return update;
}

// Component
export default function IntroSlides() {
  const [state, dispatch] = useReducer(reducer, { count: 0, mode: 0 });
  const { count, mode } = state;
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

  useEffect(() => {
    const timerId = setTimeout(() => dispatch('start'), 1);
    const intervalId = setInterval(() => dispatch('interval'), 10000);

    return () => {
      clearTimeout(timerId);
      clearInterval(intervalId);
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
