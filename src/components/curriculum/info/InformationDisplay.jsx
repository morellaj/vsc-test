// Package dependencies
import React from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { setInfo } from 'Actions';

// File dependencies
import CategoryInformation from './CategoryInformation';
import LearningGoals from './LearningGoals';
import References from './References';

// Component
export default function InformationDisplay() {
  const { type, text } = useSelector((state) => state.infoReducer);
  const dispatch = useDispatch();
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
    <Container onClick={() => dispatch(setInfo({}))} type={type}>
      <InfoContainer onClick={(e) => (e.stopPropagation())}>
        <IconContainer onClick={() => dispatch(setInfo({}))}>
          <FaTimes />
        </IconContainer>
        {display}
      </InfoContainer>
    </Container>
  );
}

// Styling
const Container = styled.div`
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
  border-radius: 5px;
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
  border-radius: 5px;
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
