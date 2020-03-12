// Package dependencies
import React from 'react';
import styled from 'styled-components';

// Component dependencies
import { FaExpandArrowsAlt, FaCompressArrowsAlt } from 'react-icons/fa';

// Component for the controls on the pdf page
export default function ScreenButton(props) {
  const { fullCap, full, fullscreenClick } = props;

  const Icon = full ? FaCompressArrowsAlt : FaExpandArrowsAlt;
  const text = full ? 'Exit Full Screen' : 'Full Screen';

  return (
    <Container fullCap={fullCap} onClick={fullscreenClick}>
      <Icon style={{ margin: '0 5px' }} />
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
