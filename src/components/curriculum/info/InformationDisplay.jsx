// Package dependencies
import React from 'react';
import styled from 'styled-components';

// Component dependencies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import CategoryInformation from './CategoryInformation';
import LearningGoals from './LearningGoals';
import References from './References';

/** ************************************ */
// Component for the description of activities
/** ******************************** */
export default function InformationDisplay(props) {
  const { setInfo, unit, info: { type, text } } = props;
  let display;
  switch (type) {
    case 'categoryInfo':
      display = <CategoryInformation text={text} />;
      break;
    case 'learning-goals':
      display = <LearningGoals unit={unit} />;
      break;
    case 'references':
      display = <References unit={unit} />;
      break;
    default:
      break;
  }

  return (
    <Container onClick={() => { setInfo(null); }}>
      <InfoContainer onClick={(e) => (e.stopPropagation())}>
        <IconContainer onClick={() => { setInfo(null); }}>
          <FontAwesomeIcon icon={faTimes} />
        </IconContainer>
        {display}
      </InfoContainer>
    </Container>
  );
}


// Styling
const Container = styled.div`
  font-size: 25px;
  background-color: rgba(0, 0, 0, .5);
  color: black;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 100;
  top: 0;
  left: 0;
  display:flex;
  justify-content:center;
  align-items: center;
`;

const IconContainer = styled.div`
  font-size: 25px;
  top: 10px;
  position: absolute;
  right: 15px;
  color: #d3d3d3;
  cursor: pointer;
  border-radius: 5px;
  padding: 3px;

  :hover {
    color: white;
    background-color: #d3d3d3;
  }

`;

const InfoContainer = styled.div`
  position:absolute;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 0 8px 0 #000000;
  max-width: 80%;
  padding: 20px;
  font-size: 16px;
`;
