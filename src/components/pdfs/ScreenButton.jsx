// Package dependencies
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Component dependencies
import Icon from '../common/Icon';

// Component for the controls on the pdf page
export default function ScreenButton(props) {
  const { full } = props;
  function handleClick() {
    props.setFull(!full);
  }

  const icon = full ? 'compress' : 'expand';
  const text = full ? 'Exit Full Screen' : 'Full Screen';

  return (
    <Container onClick={handleClick}>
      <Icon icon={icon} />
      {text}
    </Container>
  );
}

// Prop type verification
ScreenButton.propTypes = {
  setFull: PropTypes.func.isRequired,
  full: PropTypes.bool.isRequired,
};

const Container = styled.div`
  font-size: 25px;
  background-color: rgba(0, 0, 0, .4);
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  padding: 5px;
  color: white;

  :hover{
    cursor: pointer;
  }
`;
