// Package dependencies
import React from 'react';
import styled from 'styled-components';
import { FaQuestionCircle } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { setInfo } from 'Actions';

// Component
export default function ActivityGroup({ text, category, activities }) {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(setInfo({ type: 'categoryInfo', text: category }));
  }

  return (
    <Container>
      <GroupHeader>
        <div>{text}</div>
        <IconContainer onClick={handleClick}>
          <FaQuestionCircle
            onClick={handleClick}
            style={{ marginLeft: '5px' }}
          />
        </IconContainer>
      </GroupHeader>
      <Activities>{activities}</Activities>
    </Container>
  );
}

// Styling
const Container = styled.div`
  display: inline-block;
  margin: 20px 0;
  border-radius: 5px;
  background-color: white;
  border-bottom: 1px solid rgba(0,0,0,0.4);

`;

const GroupHeader = styled.div`
  display: flex;
  margin: 10px;
  font-size: 25px;
  font-weight: 500;
  border-bottom: 1px solid ${(props) => props.theme.color};

  
  @media (max-width: 1000px) {
    font-size: 20px;
  };
  
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
  display: flex;
`;
