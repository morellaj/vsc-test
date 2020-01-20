// Package dependencies
import React from 'react';
import styled from 'styled-components';

// Component dependencies
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
      <InfoContainer>
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
  top: 0;
  left: 0;
  display:flex;
  justify-content:center;
  align-items: center;
`;

const InfoContainer = styled.div`
  position:absolute;
  border-radius: 20px;
  background-color: white;
  box-shadow: 0 0 8px 0 #000000;
  max-width: 80%;
  padding: 20px;
  font-size: 20px;
`;
