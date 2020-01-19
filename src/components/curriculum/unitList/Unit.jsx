// Package dependencies
import React from 'react';
import styled from 'styled-components';


// Data files
import colors from 'Colors';


/** ********************************************* */
// Component for displaying an individual unit on the unit list
/** ********************************************* */
export default function Unit(props) {
  const {
    char, title, num, setUnitSelected, unitSelected,
  } = props;
  return (
    <Container
      onClick={(e) => {
        setUnitSelected(e.target.getAttribute('value'));
      }}
      value={num}
      color={colors[char].color}
      unitSelected={unitSelected}
    >
      <Text value={num}>
        {title}
      </Text>
    </Container>
  );
}

// Styling
const Container = styled.div`
  display: flex;
  align-items: center; 
  margin-top: 2px;
  padding: 5px;
  border-left: 10px outset ${(props) => props.color};
  border-radius: 1px;
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => (props.unitSelected ? 'white' : 'black')};
  background-color: ${(props) => (props.unitSelected ? props.color : 'white')};
  cursor: pointer;
  border-radius: 3px;

  :hover {
    background-color: ${(props) => (props.unitSelected ? props.color : '#D9D9D9')};
  };

  @media(max-width: 1000px) {
    width: 200px;
    border-left: none;
    border-bottom: 7px solid ${(props) => props.color};
    font-size: 20px;
  };
`;

const Text = styled.div`
  @media(max-width: 1000px) {
    width: 100%;
    text-align: center;
  }
`;
