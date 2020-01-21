// Package dependencies
import React from 'react';
import styled from 'styled-components';

// Component dependencies
import Icon from 'Icon';

// Component for the controls on the pdf page
export default function ScreenButton(props) {
  const { fullCap, full, fullscreenClick } = props;

  const icon = full ? 'compress' : 'expand';
  const text = full ? 'Exit Full Screen' : 'Full Screen';

  return (
    <Container fullCap={fullCap} onClick={fullscreenClick}>
      <Icon icon={icon} />
      {text}
    </Container>
  );
}


const Container = styled.div`
  font-size: 25px;
  background-color: rgba(0, 0, 0, .4);
  position: absolute;
  top: 10px;
  right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  padding: 5px;
  color: white;
  cursor: pointer;
  display: ${(props) => (props.fullCap ? 'flex' : 'none')};

  @media( max-width: 1000px) {
    font-size: 2.4vw;
    top: 1vw;
    right: 1.5vw
  }
`;
