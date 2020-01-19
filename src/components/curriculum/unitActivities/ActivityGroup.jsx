// Package dependencies
import React from 'react';
import styled from 'styled-components';

// Component dependencies
import Icon from 'Icon';

/** ************************************ */
// Component for the description of activities
/** ******************************** */
export default function ActivityGroup(props) {
  const {
    text, category, setInfo, activities,
  } = props;

  function handleClick() {
    setInfo({ type: 'categoryInfo', text: category });
  }

  return (
    <Container>
      <GroupHeader>
        <div>{text}</div>
        <IconContainer onClick={handleClick}>
          <Icon icon="question" onClick={handleClick} />
        </IconContainer>
      </GroupHeader>
      <Activities>{activities}</Activities>
    </Container>
  );
}

// Styling
const Container = styled.div`
  display: inline-block;
  margin: 20px;
  border-radius: 5px;
  background-color: white;
  border-bottom: 1px solid rgba(0,0,0,0.4);

  @media(max-width: 1200px) {
    margin: 10px;
  }
`;

const GroupHeader = styled.div`
  display: flex;
  margin: 10px;
  font-size: 25px;
  font-weight: 500;
  border-bottom: 1px solid ${(props) => props.theme.color};

  @media (max-width: 1200px) {
    font-size: 20px;
  })
`;

const Activities = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content:center;
`;

const IconContainer = styled.div`
  cursor: pointer;
  color: gray;
  font-size: 16px;
  display:flex;
  align-items:center;
`;
