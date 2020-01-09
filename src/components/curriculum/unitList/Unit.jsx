// Package dependencies
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


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
      <div value={num}>
        {title}
      </div>
    </Container>
  );
}

// Prop validation
Unit.propTypes = {
  char: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  num: PropTypes.number.isRequired,
  setUnitSelected: PropTypes.func.isRequired,
  unitSelected: PropTypes.bool.isRequired,
};

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

  :hover {
    background-color: ${(props) => (props.unitSelected ? props.color : '#D9D9D9')};
  }
`;
