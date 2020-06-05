// Package dependencies
import React, { useContext } from 'react';
import styled from 'styled-components';
import CharacterContext from '../CharacterContext';

// File dependencies
import character from 'Character';

// Data dependencies
import colors from 'Colors';

// Component
export default function Unit({ unit, setOpen }) {
  const { unitSelected, setUnitSelected } = useContext(CharacterContext);
  const { title } = character[unit];
  function handleClick(e) {
    setOpen(false);
    setUnitSelected(e.target.getAttribute('value'));
  }

  return (
    <Container
      onClick={handleClick}
      value={unit}
      color={colors[unit.charAt(0)].color}
      selected={unitSelected === unit}
    >
      <Text value={unit}>
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
  color: ${(props) => (props.selected ? 'white' : 'black')};
  background-color: ${(props) => (props.selected ? props.color : 'white')};
  cursor: pointer;
  border-radius: 3px;

  :hover {
    background-color: ${(props) => (props.selected ? props.color : '#D9D9D9')};
  };
`;

const Text = styled.div`

`;
