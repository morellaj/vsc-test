// Package dependencies
import React, { useReducer, useEffect } from 'react';
import styled from 'styled-components';
import { flexCenter } from 'Styles';

// Data dependencies
import { introPicCount } from 'Data/constants';

// File dependencies
import Picture from 'Common/Picture';

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
        <Picture
          src={`Assets/Home${i + 1}`}
          alt="pages from online short stories"
          style={{ width: '100%' }}
        />
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

const SlideContainer = styled.picture`
  ${flexCenter};
  overflow: hidden;
  opacity: ${({ count, value }) => (count === value ? 1 : 0)};
  transition: opacity 1s, width 10s, transform 10s;
  transition-timing-function: linear;
  position: absolute;
  bottom: 0;
  box-shadow: 0 0 0 #000;
  transform: translate3d(0, 0, 0);

  transform: ${({ mode }) => (
    mode === 0 || mode === 1 ? 'translateX(-20px)' : 'translateX(20px)')};

  width: ${({ mode }) => (
    mode === 1 || mode === 2 ? `${118.6 * 1}%` : `${118.6 * 1.1}%`)};

  @media (min-width: 1280px){
    width: ${({ mode }) => (
    mode === 1 || mode === 2 ? `${1519 * 1}px` : `${1519 * 1.1}px`)}};

  @media (min-width: 1532px){
    width: ${({ mode }) => (
    mode === 1 || mode === 2 ? `${105 * 1}%` : `${105 * 1.1}%`)}};
`;
