// Package dependencies
import React, { useContext } from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

// File dependencies
import CategoryInformation from './CategoryInformation';
import LearningGoals from './LearningGoals';
import References from './References';
import CharacterContext from '../CharacterContext';

// Component
export default function InformationDisplay() {
  const { info: { type, text }, setInfo } = useContext(CharacterContext);
  let display;
  switch (type) {
    case 'categoryInfo':
      display = <CategoryInformation text={text} />;
      break;
    case 'learning-goals':
      display = <LearningGoals />;
      break;
    case 'references':
      display = <References />;
      break;
    default:
      break;
  }

  return (
    <Container onClick={() => setInfo({})} type={type}>
      <InfoContainer onClick={(e) => (e.stopPropagation())}>
        <IconContainer onClick={() => setInfo({})}>
          <FaTimes />
        </IconContainer>
        {display}
      </InfoContainer>
    </Container>
  );
}

// Styling
const Container = styled.aside`
  font-size: 25px;
  padding-top: 20px;
  background-color: rgba(0, 0, 0, .5);
  color: black;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 100;
  top: 0;
  left: 0;
  justify-content:center;
  align-items: flex-start;
  overflow: scroll;

  display: ${(props) => (props.type ? 'flex' : 'none')};
`;


const InfoContainer = styled.div`
  position:relative;
  ;
  background-color: white;
  box-shadow: 0 0 8px 0 #000000;
  padding: 20px;
  font-size: 16px;
  max-width: 90%;

  @media(max-width: 700px){
    padding: 0;
  }
`;

const IconContainer = styled.div`
  font-size: 25px;
  top: 10px;
  position: absolute;
  right: 15px;
  color: #d3d3d3;
  cursor: pointer;
  ;
  padding: 3px;
  display: flex;

  :hover {
    color: white;
    background-color: #d3d3d3;
  }

  @media(max-width: 700px){
    top: 0;
  }

`;
