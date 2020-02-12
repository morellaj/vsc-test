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
    char, title, num, setUnitSelected, unitSelected, setOpen,
  } = props;

  function handleClick(e) {
    setOpen(false);
    setUnitSelected(e.target.getAttribute('value'));
  }

  return (
    <Container
      onClick={handleClick}
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
  padding: 7px;
  border-left: 10px outset ${(props) => props.color};
  border-radius: 1px;
  font-size: 19px;
  font-weight: 700;
  color: ${(props) => (props.unitSelected ? 'white' : 'black')};
  background-color: ${(props) => (props.unitSelected ? props.color : 'white')};
  cursor: pointer;
  border-radius: 3px;

  :hover {
    background-color: ${(props) => (props.unitSelected ? props.color : '#D9D9D9')};
  };
`;

const Text = styled.div`

`;
